import { FloatToolkitPrecisionInteger } from "../types";

import { getMaxPrecision } from "../get-precision/getMaxPrecision";
import { round } from "./round";

/**
 * @internal
 */
export function addArrayItem(total: number, newNumber: number, precision?: FloatToolkitPrecisionInteger): number {
	const maxPrecision = precision ?? getMaxPrecision(total, newNumber);
	return round(total + newNumber, maxPrecision);
}
