import { precisionRange } from "../../Precision";

import precisionsSum from "../../get-precision/precisionsSum";

describe("precisionsSum", () => {
	it("should return the sum of the two numbers' precisions", () => {
		expect(precisionsSum(0.123, 0.456)).toBe(6);
	});

	it("should not return anything greater than the maximum precision", () => {
		// eslint-disable-next-line
		expect(precisionsSum(0.1234567890123456789, 0.1234567890123456789)).toBeLessThanOrEqual(precisionRange.max);
	});
});
