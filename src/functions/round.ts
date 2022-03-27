import { FloatToolkitPrecisionInteger } from "../types.js";

import { isNumber } from "../eval/isNumber.js";
import { isValidPrecisionInteger } from "../eval/isValidPrecisionInteger.js";
import { precisionRange } from "../precisionRange.js";

/**
 * @internal
 */
export function round(n?: number, precision?: FloatToolkitPrecisionInteger): number {
	if (!isNumber(n)) throw new TypeError("Argument for 'n' must be a number.");
	if (!isValidPrecisionInteger(precision))
		throw new RangeError(`Argument for 'precision' must be an integer between ${precisionRange.min} and ${precisionRange.max - 1}.`);

	return Number(n!.toFixed(precision));
}
