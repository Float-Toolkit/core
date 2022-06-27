import typescript from "typescript";

import nodeResolve from "@rollup/plugin-node-resolve";
import typescriptPlugin from "rollup-plugin-typescript2";

/**
 * @type {import("rollup/dist/rollup").RollupOptions}
 */
export default {
	input: "./src/index.ts",
	output: {
		file: "./dist/index.js",
		format: "es",
	},

	plugins: [nodeResolve(), typescriptPlugin({ typescript })],
};
