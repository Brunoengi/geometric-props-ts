/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import { compilerOptions } from './tsconfig.json'
import type { Config } from 'jest'
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config = {

  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
   coverageProvider: "babel",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>'}),
   preset: 'ts-jest',
   testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
  ],

}

export default config;
