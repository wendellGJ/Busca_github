module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 70,
      branches: 70,
      functions: 70,
      statements: -10,
    },
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(svg|png|jpg)$': '<rootDir>/config/svgTransform.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|scss)$': '<rootDir>/config/CSSStub.js',
  },
  testMatch: ['<rootDir>/src(/__tests__/**/**/*.test.(js|jsx|ts|tsx))'],
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/__tests__/setup/'],

  // testResultsProcessor: 'jest-sonar-reporter',
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/*.js',
    '<rootDir>/src/modules/**/*.jsx',
    '<rootDir>/src/utils/components/**/*.js',
    '<rootDir>/src/utils/components/**/*.jsx',
    // '!<rootDir>/src/modules/<componente a ser ignorado>/**',
    // '!<rootDir>/src/utils/components/<componente a ser ignorado>/**',
  ],
};
