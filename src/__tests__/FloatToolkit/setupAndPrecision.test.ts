import FloatToolkit from "../..";

import { defaultOptions } from "../../defaultOptions";
import { isValidPrecision } from "../../eval/isValidPrecision";

import { errorMessages } from "../__mocks__/errorMessages";

describe("FloatToolkit.constructor", () => {
	let ft: FloatToolkit;

	beforeEach(() => {
		ft = new FloatToolkit();
	});

	it("should create an instance with the default options", () => {
		expect(ft).toBeTruthy();

		expect(ft.defaultPrecision).toBe(10);
		expect(ft.options).toEqual<FloatToolkit.Options>(defaultOptions);
	});

	it("should create an instance with custom options", () => {
		ft = new FloatToolkit(5, {
			forceUseDefaultPrecision: true,
		});

		expect(ft.defaultPrecision).toBe(5);
		expect(ft.options.forceUseDefaultPrecision).toBe(true);
	});

	it("should throw an error for invalid arguments", () => {
		// @ts-expect-error
		expect(() => new FloatToolkit("12")).toThrow(errorMessages.defaultPrecision);

		expect(
			() =>
				new FloatToolkit(10, {
					// @ts-expect-error
					nonExistingOption: "whatever",
				})
		).toThrow(errorMessages.options.nonExistingOption);
	});
});

describe("FloatToolkit.defaultPrecision", () => {
	let ft: FloatToolkit;

	beforeEach(() => {
		ft = new FloatToolkit();
	});

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
			// @ts-expect-error
			ft.defaultPrecision = "5";
		}).toThrow(errorMessages.defaultPrecision);
	});
});
