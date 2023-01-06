import FloatToolkit, { Options } from "../..";

import defaultOptions from "../../defaultOptions";
import isValidPrecision from "../../eval/isValidPrecision";

import errorMessages from "../__mocks__/errorMessages";

let ft: FloatToolkit;

beforeEach(() => {
	ft = new FloatToolkit();
});

describe("FloatToolkit.constructor", () => {
	it("should create an instance with the default options", () => {
		expect(ft).toBeTruthy();

		expect(ft.defaultPrecision).toBe(10);
		expect(ft.options).toEqual(defaultOptions);
	});

	it("should create an instance with custom options", () => {
		const precision = 5;

		const options: Options = {
			forceUseDefaultPrecision: true,
		};

		ft = new FloatToolkit(precision, options);

		expect(ft.defaultPrecision).toBe(precision);
		expect(ft.options).toEqual<Options>({ ...defaultOptions, ...options });
	});

	it("should throw an error for invalid arguments", () => {
		// @ts-expect-error defaultPrecision must be an integer between 1 and 17.
		expect(() => new FloatToolkit("12")).toThrow(errorMessages.defaultPrecision);

		expect(
			() =>
				new FloatToolkit(10, {
					// @ts-expect-error FloatToolkit does not support the option nonExistingOption.
					nonExistingOption: "whatever",
				})
		).toThrow(errorMessages.options.nonExistingOption);
	});
});

describe("FloatToolkit.defaultPrecision", () => {
	it("should return a valid FloatToolkit.Precision value", () => {
		expect(ft.defaultPrecision).toBeDefined();
		expect(isValidPrecision(ft.defaultPrecision)).toBe(true);
	});

	it("should be assignable to a FloatToolkit.Precision value and throw an error for anything else", () => {
		expect(() => {
			ft.defaultPrecision = 5;
		}).not.toThrow();

		expect(ft.defaultPrecision).toBe(5);

		expect(() => {
			// @ts-expect-error defaultPrecision must be an integer between 1 and 17.
			ft.defaultPrecision = "5";
		}).toThrow(errorMessages.defaultPrecision);
	});
});
