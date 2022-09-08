import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,ts}"],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'html'],
  preset: "ts-jest",
  projects: [
    '<rootDir>/projects/server'
  ],
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  verbose: true,
};

export default config;
