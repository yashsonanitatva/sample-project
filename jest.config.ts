import { pathsToModuleNameMapper } from 'ts-jest/utils';

import { compilerOptions } from './tsconfig.json';

const jestConfig = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [`node_modules`, `\\.next`, 'cypress', '__tests__'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/__mocks__/svg.ts',
    'amazon-cognito-identity-js': '<rootDir>/__mocks__/cognito.js',
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};

export default jestConfig;
