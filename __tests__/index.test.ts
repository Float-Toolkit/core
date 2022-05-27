describe("Vanilla JS", () => {
	it("should still have floating point issues (otherwise FloatToolkit is pointless)", () => {
		expect(0.1 + 0.2).not.toBe(0.3);
	});
});
