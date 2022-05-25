import FloatToolkit from "../index.js";

import { precisionsSum } from "../get-precision/precisionsSum.js";
import { round } from "./round.js";

/**
 * @internal
 */
export function multiplyArrayItem(total: number, newNumber: number, precision?: FloatToolkit.Precision): number {
	const maxPrecision = precision ?? precisionsSum(total, newNumber);
	return round(total * newNumber, maxPrecision);
}
