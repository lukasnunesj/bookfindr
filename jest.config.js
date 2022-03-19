module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^~/(.*)$': '<rootDir>/src/$1',
        '^vue$': 'vue/dist/vue.common.js',
    },
    moduleFileExtensions: ['js', 'vue', 'json'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    collectCoverage: false,
    collectCoverageFrom: [
        '<rootDir>/src/components/**/*.{js,vue}',
        '<rootDir>/src/router/**/*.{js,vue}',
        '<rootDir>/src/ui/**/*.{js,vue}',
        '<rootDir>/src/views/**/*.{js,vue}',
        '!**/node_modules/**',
    ],
    testEnvironment: 'jsdom',
};
