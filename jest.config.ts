/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {

  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/GeometricProps.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
   preset: 'ts-jest',
   testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
  ],

}

export default config;
