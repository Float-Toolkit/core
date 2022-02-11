import { FloatToolkitPrecisionInteger } from "../types";

import { precisionsSum } from "../get-precision/precisionsSum";
import { round } from "./round";

/**
 * @internal
 */
export function multiplyArrayItem(total: number, newNumber: number, precision?: FloatToolkitPrecisionInteger): number {
	const maxPrecision = precision ?? precisionsSum(total, newNumber);
	return round(total * newNumber, maxPrecision);
}
