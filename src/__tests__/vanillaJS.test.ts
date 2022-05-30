it("should still have floating point issues (otherwise FloatToolkit is pointless)", () => {
	expect(0.1 + 0.2).toBe(0.30000000000000004);
});

it("should have a Number.prototype.toFixed(n) method to round floats", () => {
	const roundedSum = Number((0.1 + 0.2).toFixed(10));
	expect(roundedSum).toBe(0.3);
});
