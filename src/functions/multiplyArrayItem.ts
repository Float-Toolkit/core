import { FloatToolkitPrecisionInteger } from "../types";

import { round } from "./round";
import { precisionsSum } from "../get-precision/precisionsSum";

/**
 * @internal
 */
export function multiplyArrayItem(total: number, newNumber: number, precision?: FloatToolkitPrecisionInteger): number {
	const maxPrecision = precision ?? precisionsSum(total, newNumber);
	return round(total * newNumber, maxPrecision);
}
