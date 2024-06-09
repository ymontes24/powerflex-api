import { updateSprocketController } from './updateSprocket.controller.js';
import { updateSprocket, getSprocketById } from '../../services/sprockets/sprockets.service.js';
import { sprocketIdSchema, sprocketUpdateSchema } from '../../schema/sprocket.schema.js';

jest.mock('../../services/sprockets/sprockets.service.js');
jest.mock('../../schema/sprocket.schema.js');

describe('updateSprocketController', () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            params: {
                id: '12345'
            },
            body: {
                teeth: 30,
                pitch_diameter: 1.5,
                outside_diameter: 2.5,
                pitch: 1.2
            },
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

    it('should update the sprocket and return status 200 with success message', async () => {
        const sprocketId = '12345';
        const sprocket = {
            teeth: 30,
            pitch_diameter: 1.5,
            outside_diameter: 2.5,
            pitch: 1.2
        };

        sprocketIdSchema.validateAsync.mockResolvedValue({});
        sprocketUpdateSchema.validateAsync.mockResolvedValue({});

        getSprocketById.mockResolvedValue(sprocket);
        updateSprocket.mockResolvedValue();

        await updateSprocketController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: sprocketId });
        expect(sprocketUpdateSchema.validateAsync).toHaveBeenCalledWith(sprocket);
        expect(getSprocketById).toHaveBeenCalledWith(sprocketId);
        expect(updateSprocket).toHaveBeenCalledWith(sprocketId, sprocket);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Sprocket updated successfully' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 with error message when sprocket is not found', async () => {
        const sprocketId = '12345';

        sprocketIdSchema.validateAsync.mockResolvedValue({});
        sprocketUpdateSchema.validateAsync.mockResolvedValue({});
        getSprocketById.mockResolvedValue(null);

        await updateSprocketController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: sprocketId });
        expect(sprocketUpdateSchema.validateAsync).toHaveBeenCalledWith(req.body);
        expect(getSprocketById).toHaveBeenCalledWith(sprocketId);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Sprocket not found' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 with error message when sprocketIdSchema validation fails', async () => {
        const validationError = new Error('ValidationError');
        validationError.isJoi = true;
        sprocketIdSchema.validateAsync.mockRejectedValue(validationError);

        await updateSprocketController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: req.params.id });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'ValidationError' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 with error message when sprocketUpdateSchema validation fails', async () => {
        const validationError = new Error('ValidationError');
        validationError.isJoi = true;
        sprocketIdSchema.validateAsync.mockResolvedValue({});
        sprocketUpdateSchema.validateAsync.mockRejectedValue(validationError);

        console.log('req.body', req.body);

        await updateSprocketController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: req.params.id });
        expect(sprocketUpdateSchema.validateAsync).toHaveBeenCalledWith({ id: req.params.id });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'ValidationError' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next with error when getSprocketById throws an error', async () => {
        const error = new Error('Something went wrong');
        sprocketIdSchema.validateAsync.mockResolvedValue({});
        sprocketUpdateSchema.validateAsync.mockResolvedValue({});
        getSprocketById.mockRejectedValue(error);

        await updateSprocketController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: req.params.id });
        expect(sprocketUpdateSchema.validateAsync).toHaveBeenCalledWith(req.body);
        expect(getSprocketById).toHaveBeenCalledWith(req.params.id);
        expect(next).toHaveBeenCalledWith(error);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });

    it('should call next with error when updateSprocket throws an error', async () => {
        const error = new Error('Something went wrong');
        sprocketIdSchema.validateAsync.mockResolvedValue({});
        sprocketUpdateSchema.validateAsync.mockResolvedValue({});
        getSprocketById.mockResolvedValue({});
        updateSprocket.mockRejectedValue(error);

        await updateSprocketController(req, res, next);

        expect(sprocketIdSchema.validateAsync).toHaveBeenCalledWith({ id: req.params.id });
        expect(sprocketUpdateSchema.validateAsync).toHaveBeenCalledWith(req.body);
        expect(getSprocketById).toHaveBeenCalledWith(req.params.id);
        expect(updateSprocket).toHaveBeenCalledWith(req.params.id, req.body);
        expect(next).toHaveBeenCalledWith(error);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
});