import FloatToolkit from "../../..";

import errorMessages from "../../__mocks__/errorMessages";

let ft: FloatToolkit;

beforeEach(() => {
	ft = new FloatToolkit();
});

describe("FloatToolkit.add()", () => {
	it("should add the provided numbers and choose the best precision for the result", () => {
		expect(ft.add([])).toBe(0);
		expect(ft.add([0.1])).toBe(0.1);
		expect(ft.add([0.1, 0.2])).toBe(0.3);

		expect(ft.add([2022.1, 2022.3])).toBe(4044.4);
		expect(ft.add([0.123, 0.456, 0.1])).toBe(0.679);
		expect(ft.add([5e30, 7e30])).toBe(12e30);
	});

	it("should round to the default precision if and only if specified in the options", () => {
		ft.defaultPrecision = 17;
		expect(ft.add([0.1, 0.2])).toBe(0.3);

		ft.setOptions({
			forceUseDefaultPrecision: true,
		});

		expect(ft.add([0.1, 0.2])).toBe(0.30000000000000004);
	});

	it("should round to the specified precision if there is one", () => {
		expect(ft.add([0.1, 0.2], 17)).toBe(0.30000000000000004);
	});

	it("should throw errors for invalid arguments", () => {
		// @ts-expect-error Argument for 'numbers' must be an array of numbers.
		expect(() => ft.add(0.1 + 0.2)).toThrow(errorMessages.arguments.numbersArray.invalidType);

		// @ts-expect-error Argument for 'precision' must be an integer between 1 and 17.
		expect(() => ft.add([0.1, 0.2], "10")).toThrow(errorMessages.arguments.precision);
	});
});

describe("FloatToolkit.subtract()", () => {
	it("should subtract the provided numbers from the first one and choose the best precision for the result", () => {
		expect(ft.subtract([])).toBe(0);
		expect(ft.subtract([0.8])).toBe(0.8);
		expect(ft.subtract([0.8, 0.1])).toBe(0.7);
		expect(ft.subtract([0.8, 0.1, 0.3])).toBe(0.4);

		expect(ft.subtract([2022.2, 0.1])).toBe(2022.1);
		expect(ft.subtract([0.679, 0.1])).toBe(0.579);
		expect(ft.subtract([12e30, 7e30])).toBe(5e30);
	});

	it("should round to the default precision if and only if specified in the options", () => {
		ft.defaultPrecision = 16;
		expect(ft.subtract([0.8, 0.1, 0.3])).toBe(0.4);

		ft.setOptions({
			forceUseDefaultPrecision: true,
		});

		expect(ft.subtract([0.8, 0.1, 0.3], 16)).toBe(0.4000000000000001);
	});

	it("should round to the specified precision if there is one", () => {
		expect(ft.subtract([0.8, 0.1, 0.3], 16)).toBe(0.4000000000000001);
	});

	it("should throw errors for invalid arguments", () => {
		// @ts-expect-error Argument for 'numbers' must be an array of numbers.
		expect(() => ft.subtract(0.8 - 0.1 - 0.3)).toThrow(errorMessages.arguments.numbersArray.invalidType);

		// @ts-expect-error Argument for 'precision' must be an integer between 1 and 17.
		expect(() => ft.subtract([0.8, 0.1, 0.3], "10")).toThrow(errorMessages.arguments.precision);
	});
});
