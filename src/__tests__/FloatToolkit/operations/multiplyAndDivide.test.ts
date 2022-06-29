import FloatToolkit from "../../..";

import { errorMessages } from "../../__mocks__/errorMessages";

let ft: FloatToolkit;
beforeEach(() => {
	ft = new FloatToolkit();
});

describe("FloatToolkit.multiply()", () => {
	it("should multiply the provided numbers and choose the best precision for the result", () => {
		expect(ft.multiply([])).toBe(0);
		expect(ft.multiply([0.1])).toBe(0.1);
		expect(ft.multiply([0.1, 0.9])).toBe(0.09);

		expect(ft.multiply([2022.1, 0.7])).toBe(1415.47);
		expect(ft.multiply([2.9e31, 3.1e31])).toBe(8.99e62);
	});

	it("should round to the default precision if and only if specified in the options", () => {
		ft.defaultPrecision = 17;
		expect(ft.multiply([0.1, 0.9])).toBe(0.09);

		ft.setOptions({
			forceUseDefaultPrecision: true,
		});
		expect(ft.multiply([0.1, 0.9])).toBe(0.09000000000000001);
	});

	it("should round to the specified precision if there is one", () => {
		expect(ft.multiply([0.1, 0.9], 17)).toBe(0.09000000000000001);
	});

	it("should throw errors for invalid arguments", () => {
		// @ts-expect-error
		expect(() => ft.multiply(0.1 * 0.9)).toThrow(errorMessages.arguments.numbersArray.invalidType);
		// @ts-expect-error
		expect(() => ft.multiply([0.1, 0.9], "10")).toThrow(errorMessages.arguments.precision);
	});
});

describe("FloatToolkit.divide()", () => {
	it("should divide the first number by the following ones and round them to the default precision", () => {
		expect(ft.divide([])).toBe(0);
		expect(ft.divide([0.09])).toBe(0.09);
		expect(ft.divide([0.09, 0.9])).toBe(0.1);

		expect(ft.divide([1415.47, 0.7])).toBe(2022.1);
		expect(ft.divide([8.99e62, 3.1e31])).toBe(2.9e31);

		ft.defaultPrecision = 17;
		expect(ft.divide([0.09, 0.9])).toBe(0.09999999999999999);
	});

	it("should round to the specified precision if there is one", () => {
		expect(ft.divide([0.09, 0.9], 17)).toBe(0.09999999999999999);
	});

	it("should throw errors for invalid arguments", () => {
		// @ts-expect-error
		expect(() => ft.divide(0.09 * 0.9)).toThrow(errorMessages.arguments.numbersArray.invalidType);
		// @ts-expect-error
		expect(() => ft.divide([0.09, 0.9], "10")).toThrow(errorMessages.arguments.precision);
	});
});
