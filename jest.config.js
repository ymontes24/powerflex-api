export default {
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    collectCoverage: true,
    coveragePathIgnorePatterns: ['/node_modules/', '/src/services/', '/src/DB/'],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90
        }
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
};
