import { getFactoryById } from '../../services/factory/factory.service.js';
import { factoryIdSchema } from '../../schema/factory.schema.js';
import { getFactoryByIdController } from './getFactoryById.controller.js';

jest.mock('../../services/factory/factory.service.js');
jest.mock('../../schema/factory.schema.js');

describe('getFactoryByIdController', () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            params: {
                id: 1,
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

    it('should return formatted factory when getFactoryById succeeds', async () => {
        const factory = {
            id: 1,
            name: 'Factory 1',
            location: 'Location 1',
            sprocketProduction: [
                {
                    actual_production: 100,
                    goal_production: 120,
                    timestamp: '2022-01-01',
                },
                {
                    actual_production: 150,
                    goal_production: 180,
                    timestamp: '2022-01-02',
                },
            ],
        };

        factoryIdSchema.validateAsync.mockResolvedValue({});

        getFactoryById.mockResolvedValue(factory);

        await getFactoryByIdController(req, res, next);

        expect(factoryIdSchema.validateAsync).toHaveBeenCalledWith({ id: 1 });
        expect(getFactoryById).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            factory: {
                name: 'Factory 1',
                location: 'Location 1',
                chart_data: {
                    sprocket_production_actual: [100, 150],
                    sprocket_production_goal: [120, 180],
                    time: ['2022-01-01', '2022-01-02'],
                },
            },
        });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 with error message when factoryIdSchema validation fails', async () => {
        const validationError = new Error('ValidationError');
        validationError.isJoi = true;
        factoryIdSchema.validateAsync.mockRejectedValue(validationError);

        await getFactoryByIdController(req, res, next);

        expect(factoryIdSchema.validateAsync).toHaveBeenCalledWith({ id: 1 });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "ValidationError" });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 404 with error message when getFactoryById returns null', async () => {
        factoryIdSchema.validateAsync.mockResolvedValue({});
        getFactoryById.mockResolvedValue(null);

        await getFactoryByIdController(req, res, next);

        expect(factoryIdSchema.validateAsync).toHaveBeenCalledWith({ id: 1 });
        expect(getFactoryById).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Factory not found' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next with error when getFactoryById throws an error', async () => {
        const error = new Error('Something went wrong');
        factoryIdSchema.validateAsync.mockResolvedValue({});
        getFactoryById.mockRejectedValue(error);

        await getFactoryByIdController(req, res, next);

        expect(factoryIdSchema.validateAsync).toHaveBeenCalledWith({ id: 1 });
        expect(getFactoryById).toHaveBeenCalledWith(1);
        expect(next).toHaveBeenCalledWith(error);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
});