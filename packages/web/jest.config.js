const path = require('path');

const here = (p) => path.join(__dirname, p);

const ignores = [
  '/node_modules/',
  '<rootDir>/dist/',
  '<rootDir>/reports/'
];

const jestConfig = {
  cache: false,
  setupFiles: [],
  setupTestFrameworkScriptFile: here('./jest.setup.js'),
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/?(*.)(spec).js?(x)'],
  testPathIgnorePatterns: [...ignores],
  coveragePathIgnorePatterns: [...ignores],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/index.{js,jsx}'],
  coverageDirectory: '<rootDir>/reports/coverage',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|scss|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      here(
        './test/file-mock.js'
      )
  },
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      lines: 100,
      functions: 100
    }
  }
};

module.exports = jestConfig;
