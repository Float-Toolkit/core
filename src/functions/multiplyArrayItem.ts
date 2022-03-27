import { FloatToolkitPrecisionInteger } from "../types.js";

import { precisionsSum } from "../get-precision/precisionsSum.js";
import { round } from "./round.js";

/**
 * @internal
 */
export function multiplyArrayItem(total: number, newNumber: number, precision?: FloatToolkitPrecisionInteger): number {
	const maxPrecision = precision ?? precisionsSum(total, newNumber);
	return round(total * newNumber, maxPrecision);
}
