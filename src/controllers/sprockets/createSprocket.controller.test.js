import { createSprocketController } from './createSprocket.controller.js';
import { createSprocket } from '../../services/sprockets/sprockets.service.js';
import { sprocketCreateSchema } from '../../schema/sprocket.schema.js';

jest.mock('../../services/sprockets/sprockets.service.js');
jest.mock('../../schema/sprocket.schema.js');

describe('createSprocketController', () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            body: {
                // Add your test data here
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

    it('should create a new sprocket and return it with status 201', async () => {
        const sprocket = {
            // Add your test data here
        };

        sprocketCreateSchema.validateAsync.mockResolvedValue({});

        createSprocket.mockResolvedValue(sprocket);

        await createSprocketController(req, res, next);

        expect(sprocketCreateSchema.validateAsync).toHaveBeenCalledWith(sprocket);
        expect(createSprocket).toHaveBeenCalledWith(sprocket);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(sprocket);
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 with error message when sprocketCreateSchema validation fails', async () => {
        const validationError = new Error('ValidationError');
        validationError.isJoi = true;
        sprocketCreateSchema.validateAsync.mockRejectedValue(validationError);

        await createSprocketController(req, res, next);

        expect(sprocketCreateSchema.validateAsync).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'ValidationError' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next with error when createSprocket throws an error', async () => {
        const error = new Error('Something went wrong');
        sprocketCreateSchema.validateAsync.mockResolvedValue({});
        createSprocket.mockRejectedValue(error);

        await createSprocketController(req, res, next);

        expect(sprocketCreateSchema.validateAsync).toHaveBeenCalledWith(req.body);
        expect(createSprocket).toHaveBeenCalledWith(req.body);
        expect(next).toHaveBeenCalledWith(error);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
});