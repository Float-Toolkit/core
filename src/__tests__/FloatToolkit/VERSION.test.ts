import PackageJSON from "../../../package.json";

import { VERSION } from "../..";

it("should contain the full version tag", () => {
	expect(VERSION.full).toBe(PackageJSON.version);
});

it("should contain the major number version", () => {
	expect(VERSION.major).toBe(PackageJSON.version.split(".")[0]);
});

it("should contain the minor number version", () => {
	expect(VERSION.minor).toBe(PackageJSON.version.split(".")[1]);
});

it("should contain the patch version", () => {
	expect(VERSION.patch).toBe(PackageJSON.version.split(".")[2]);
});
