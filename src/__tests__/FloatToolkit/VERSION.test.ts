import PackageJSON from "../../../package.json";

import FloatToolkit from "../..";

it("should contain the full version tag", () => {
	expect(FloatToolkit.VERSION.full).toBe(PackageJSON.version);
});

it("should contain the major number version", () => {
	expect(FloatToolkit.VERSION.major).toBe(PackageJSON.version.split(".")[0]);
});

it("should contain the minor number version", () => {
	expect(FloatToolkit.VERSION.minor).toBe(PackageJSON.version.split(".")[1]);
});

it("should contain the patch version", () => {
	expect(FloatToolkit.VERSION.patch).toBe(PackageJSON.version.split(".")[2]);
});
