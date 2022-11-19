import FloatToolkit from "../../..";
import errorMessages from "../../__mocks__/errorMessages";

let ft: FloatToolkit;

beforeEach(() => {
	ft = new FloatToolkit();
});

it("should round the number to the default precision", () => {
	expect(ft.round(0.1 + 0.2)).toBe(0.3);

	ft.defaultPrecision = 17;
	expect(ft.round(0.1 + 0.2)).toBe(0.30000000000000004);
});

it("should round the number to the specified precision", () => {
	expect(ft.round(0.1 + 0.2, 17)).toBe(0.30000000000000004);
});

it("should throw an error for invalid arguments", () => {
	// @ts-expect-error Argument for 'n' must be a number.
	expect(() => ft.round("0.1" + 0.2)).toThrow(errorMessages.arguments.n);

	// @ts-expect-error Argument for 'precision' must be an integer between 1 and 17.
	expect(() => ft.round(0.1 + 0.2, "10")).toThrow(errorMessages.arguments.precision);
});
