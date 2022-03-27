import { FloatToolkitPrecisionInteger } from "../types.js";

import { getMaxPrecision } from "../get-precision/getMaxPrecision.js";
import { round } from "./round.js";

/**
 * @internal
 */
export function addArrayItem(total: number, newNumber: number, precision?: FloatToolkitPrecisionInteger): number {
	const maxPrecision = precision ?? getMaxPrecision(total, newNumber);
	return round(total + newNumber, maxPrecision);
}
