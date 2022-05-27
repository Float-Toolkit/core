import FloatToolkit from ".";
import { defaultOptions } from "./defaultOptions";

describe("Vanilla JS", () => {
	it("should still have floating point issues (otherwise FloatToolkit is pointless)", () => {
		expect(0.1 + 0.2).not.toBe(0.3);
	});

	it("should have a Number.prototype.toFixed(n) method to round floats", () => {
		const roundedSum = Number((0.1 + 0.2).toFixed(10));
		expect(roundedSum).toBe(0.3);
	});
});

describe("FloatToolkit", () => {
	let ft: FloatToolkit;

	beforeEach(() => {
		ft = new FloatToolkit();
	});

	it("should create an instance with the default values", () => {
		expect(ft).toBeTruthy();

		expect(ft.defaultPrecision).toBe(10);
		expect(ft.options).toEqual<FloatToolkit.Options>(defaultOptions);
	});
});
