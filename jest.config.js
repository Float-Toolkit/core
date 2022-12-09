/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	errorOnDeprecated: true,

	modulePathIgnorePatterns: ["<rootDir>/src/__tests__/__mocks__"],

	preset: "ts-jest",
	testEnvironment: "node",

	globals: {
		"ts-jest": { tsconfig: "<rootDir>/tsconfig.test.json", useESM: true },
	},
};

module.exports = config;
