import { FloatToolkitPrecisionInteger } from "../types.js";

import { getPrecision } from "./getPrecision.js";
import { precisionRange } from "../precisionRange.js";

/**
 * @internal
 */
export function precisionsSum(n1: number, n2: number): FloatToolkitPrecisionInteger {
	const n1Precision = getPrecision(n1);
	const n2Precision = getPrecision(n2);

	const newPrecision = n1Precision + n2Precision;

	if (newPrecision >= precisionRange.max) return precisionRange.max;
	return newPrecision as FloatToolkitPrecisionInteger;
}
