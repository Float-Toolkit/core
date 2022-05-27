/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	errorOnDeprecated: true,

	preset: "ts-jest",
	testEnvironment: "node",
	resolver: "jest-ts-webcompat-resolver",

	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.test.json",
		},
	},
};

export default config;
