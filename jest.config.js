const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
    dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    modulePaths: ['<rootDir>'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/setupTests.js'],
    testEnvironment: 'jsdom',
};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
