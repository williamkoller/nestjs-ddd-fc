module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/infrastructure/ioc/**/*.module.ts',
    '!<rootDir>/src/infrastructure/ioc/*.module.ts',
    '!<rootDir>/src/infrastructure/**/**/*.module.ts',
    '!<rootDir>/src/infrastructure/**/**/models/*.ts',
    '!<rootDir>/src/app.module.ts',
    '!<rootDir>/src/application/dtos/**/*.dto.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['js', 'json', 'ts'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 100,
      statements: 90,
    },
  },
};
