import isValidPrecision from "../../eval/isValidPrecision";

it("should only return true for a valid FloatToolkit.Precision value", () => {
	expect(isValidPrecision(10)).toBe(true);

	// @ts-expect-error undefined must also be tested
	expect(isValidPrecision()).toBe(false);
	expect(isValidPrecision("10")).toBe(false);
	expect(isValidPrecision(NaN)).toBe(false);
	expect(isValidPrecision(0.5)).toBe(false);
	expect(isValidPrecision(-1)).toBe(false);
	expect(isValidPrecision(20)).toBe(false);
});
