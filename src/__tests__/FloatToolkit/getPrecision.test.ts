import { precisionRange } from "../../precisionRange";

import { precisionsSum } from "../../get-precision/precisionsSum";

describe("precisionsSum", () => {
	it("should return the sum of the two numbers' precisions", () => {
		expect(precisionsSum(0.123, 0.456)).toBe(6);
	});

	it("should not return anything greater than the maximum precision", () => {
		expect(precisionsSum(0.123456789012345, 0.123456789012345)).toBeLessThanOrEqual(precisionRange.max);
	});
});
