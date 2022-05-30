import FloatToolkit from "../..";

import { defaultOptions } from "../../defaultOptions";
import { validateOptions } from "../../eval/validateOptions";

import { errorMessages } from "../__mocks__/errorMessages";

describe("FloatToolkit.options", () => {
	it("should return a valid frozen FloatToolkit.Options object", () => {
		const ft = new FloatToolkit();

		expect(() => validateOptions(ft.options, true)).not.toThrow();
		expect(Object.isFrozen(ft.options)).toBe(true);
	});
});

describe("FloatToolkit.setOptions()", () => {
	let ft: FloatToolkit;
	let prevOptions: Readonly<FloatToolkit.Options>;
	let returnedOptions: Readonly<FloatToolkit.Options>;

	beforeEach(() => {
		ft = new FloatToolkit();
		prevOptions = ft.options;
		returnedOptions = ft.setOptions({
			forceUseDefaultPrecision: true,
		});
	});

	it("should modify the FloatToolkit's options", () => {
		expect(ft.options).toEqual({ ...prevOptions, forceUseDefaultPrecision: true });
	});

	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(() => validateOptions(returnedOptions, true)).not.toThrow();
		expect(Object.isFrozen(returnedOptions)).toBe(true);
	});

	it("should throw an error for an invalid option object", () => {
		// @ts-expect-error
		expect(() => ft.setOptions(["forceUseDefaultPrecision"])).toThrow(errorMessages.options.notAnObject);
	});
});

describe("FloatToolkit.resetOptions()", () => {
	let ft: FloatToolkit;
	let returnedOptions: Readonly<FloatToolkit.Options>;

	beforeEach(() => {
		ft = new FloatToolkit();
		returnedOptions = ft.resetOptions({
			forceUseDefaultPrecision: true,
		});
	});

	it("should reset and modify the FloatToolkit's options", () => {
		expect(ft.options).toEqual({ ...defaultOptions, forceUseDefaultPrecision: true });
	});

	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(() => validateOptions(returnedOptions, true)).not.toThrow();
		expect(Object.isFrozen(returnedOptions)).toBe(true);
	});

	it("should throw an error for an invalid option object", () => {
		// @ts-expect-error
		expect(() => ft.resetOptions(["forceUseDefaultPrecision"])).toThrow(errorMessages.options.notAnObject);
	});
});
