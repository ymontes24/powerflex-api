import { getAllFactoriesController } from './getAllFactories.controller.js';
import { getAllFactories } from '../../services/factory/factory.service.js';

jest.mock('../../services/factory/factory.service');

describe('getAllFactoriesController', () => {
    let req, res, next;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        next = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return formatted factories when getAllFactories succeeds', async () => {
        const factories = [
            {
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
            },
            {
                id: 2,
                name: 'Factory 2',
                location: 'Location 2',
                sprocketProduction: [
                    {
                        actual_production: 200,
                        goal_production: 220,
                        timestamp: '2022-01-01',
                    },
                    {
                        actual_production: 250,
                        goal_production: 280,
                        timestamp: '2022-01-02',
                    },
                ],
            },
        ];

        getAllFactories.mockResolvedValue(factories);

        await getAllFactoriesController(req, res, next);

        expect(getAllFactories).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([
            {
                factory: {
                    id: 1,
                    name: 'Factory 1',
                    location: 'Location 1',
                    chart_data: {
                        sprocket_production_actual: [100, 150],
                        sprocket_production_goal: [120, 180],
                        time: ['2022-01-01', '2022-01-02'],
                    },
                },
            },
            {
                factory: {
                    id: 2,
                    name: 'Factory 2',
                    location: 'Location 2',
                    chart_data: {
                        sprocket_production_actual: [200, 250],
                        sprocket_production_goal: [220, 280],
                        time: ['2022-01-01', '2022-01-02'],
                    },
                },
            },
        ]);
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next with error when getAllFactories throws an error', async () => {
        const error = new Error('Something went wrong');
        getAllFactories.mockRejectedValue(error);

        await getAllFactoriesController(req, res, next);

        expect(getAllFactories).toHaveBeenCalled();
        expect(next).toHaveBeenCalledWith(error);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
});