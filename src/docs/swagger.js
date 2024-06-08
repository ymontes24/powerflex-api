import swaggerJSDoc from 'swagger-jsdoc';
import __dirname from 'path';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Sprocket Factory API',
            version: '1.0.0',
            description: 'API for managing sprocket factories and sprockets',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [`./src/routes/*.routes.js`],
};

export const swaggerSpec = swaggerJSDoc(options);