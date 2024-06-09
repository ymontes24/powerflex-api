import { getSprocketByIdController } from './getSprocketById.controller.js';
import { getSprocketById } from '../../services/sprockets/sprockets.service.js';
import { sprocketIdSchema } from '../../schema/sprocket.schema.js';

jest.mock('../../services/sprockets/sprockets.service.js');
jest.mock('../../schema/sprocket.schema.js');

describe('getSprocketByIdController', () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            params: {
                id: '12345'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return the sprocket with status 200 when found', async () => {
        const sprocketId = '12345';
        const sprocket = {
            id: sprocketId,
            teeth: 30,
            pitch_diameter: 1.5,
            outside_diameter: 2.5,
            pitch: 1.2
        };

        sprocketIdSchema.validateAsync.mockResolvedValue({});
        getSprocketById.mockResolvedValue(sprocket);

        await getSprocketByIdController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: sprocketId });
        expect(getSprocketById).toHaveBeenCalledWith(sprocketId);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(sprocket);
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 with error message when sprocket is not found', async () => {
        const sprocketId = '12345';

        sprocketIdSchema.validateAsync.mockResolvedValue({});
        getSprocketById.mockResolvedValue(null);

        await getSprocketByIdController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: sprocketId });
        expect(getSprocketById).toHaveBeenCalledWith(sprocketId);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Sprocket not found' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 with error message when sprocketIdSchema validation fails', async () => {
        const validationError = new Error('ValidationError');
        validationError.isJoi = true;
        sprocketIdSchema.validateAsync.mockRejectedValue(validationError);

        await getSprocketByIdController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: req.params.id });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'ValidationError' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next with error when getSprocketById throws an error', async () => {
        const error = new Error('Something went wrong');
        sprocketIdSchema.validateAsync.mockResolvedValue({});
        getSprocketById.mockRejectedValue(error);

        await getSprocketByIdController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: req.params.id });
        expect(getSprocketById).toHaveBeenCalledWith(req.params.id);
        expect(next).toHaveBeenCalledWith(error);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
});