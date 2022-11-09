import FloatToolkit from "../..";

import { defaultOptions } from "../../defaultOptions";
import { validateOptions } from "../../eval/validateOptions";

import { errorMessages } from "../__mocks__/errorMessages";

let ft: FloatToolkit;
beforeEach(() => {
	ft = new FloatToolkit();
});

describe("FloatToolkit.options", () => {
	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(() => validateOptions(ft.options, true)).not.toThrow();
		expect(Object.isFrozen(ft.options)).toBe(true);
	});
});

describe("FloatToolkit.setOptions()", () => {
	let prevOptions: Readonly<FloatToolkit.Options>;
	let returnedOptions: Readonly<FloatToolkit.Options>;

	beforeEach(() => {
		prevOptions = ft.options;
		returnedOptions = ft.setOptions({
			forceUseDefaultPrecision: true,
		});
	});

	it("should modify the FloatToolkit's options", () => {
		expect(returnedOptions).toEqual<FloatToolkit.Options>({ ...prevOptions, forceUseDefaultPrecision: true });
		expect(ft.options).toEqual(returnedOptions);
	});

	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(() => validateOptions(returnedOptions, true)).not.toThrow();
		expect(Object.isFrozen(returnedOptions)).toBe(true);
	});

	it("should throw an error for an invalid option object", () => {
		// @ts-expect-error Argument for 'options' must be an options object.
		expect(() => ft.setOptions(["forceUseDefaultPrecision"])).toThrow(errorMessages.options.notAnObject);
	});
});

describe("FloatToolkit.resetOptions()", () => {
	let returnedOptions: Readonly<FloatToolkit.Options>;

	beforeEach(() => {
		returnedOptions = ft.resetOptions({
			forceUseDefaultPrecision: true,
		});
	});

	it("should reset and modify the FloatToolkit's options", () => {
		expect(returnedOptions).toEqual<FloatToolkit.Options>({ ...defaultOptions, forceUseDefaultPrecision: true });
		expect(ft.options).toEqual(returnedOptions);
	});

	it("should return a valid frozen FloatToolkit.Options object", () => {
		expect(() => validateOptions(returnedOptions, true)).not.toThrow();
		expect(Object.isFrozen(returnedOptions)).toBe(true);
	});

	it("should throw an error for an invalid option object", () => {
		// @ts-expect-error Argument for 'options' must be an options object.
		expect(() => ft.resetOptions(["forceUseDefaultPrecision"])).toThrow(errorMessages.options.notAnObject);
	});
});
