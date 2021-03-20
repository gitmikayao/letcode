import type { Config } from '@jest/types';
import path from 'path';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/!(*.d).{js,ts}",
  ],

  rootDir: path.join(__dirname),
  testMatch: ["<rootDir>/test/**/419*.(spec|test).(t|j)s"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1"
  },
  watchPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ]
};

export default config;