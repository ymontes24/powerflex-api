export default {
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
};
