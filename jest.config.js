module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/__mocks__/fileMocks.ts',
        '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMocks.ts',
    },
};
