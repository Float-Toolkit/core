import FloatToolkit from "../index.js";
import { precisionRange } from "../precisionRange.js";

import { isNumber } from "../eval/isNumber.js";
import { isValidPrecision } from "../eval/isValidPrecision.js";
import { isLargeNumber } from "../eval/isLargeNumber.js";

/**
 * @internal
 */
export function round(n?: number, precision?: FloatToolkit.Precision): number {
	if (!isNumber(n)) throw new TypeError("Argument for 'n' must be a number.");
	if (!isValidPrecision(precision))
		throw new RangeError(
			`Argument for 'precision' must be an integer between ${precisionRange.min} and ${precisionRange.max - 1}.`
		);

	return Number(isLargeNumber(n!) ? n!.toPrecision(precision! + 1) : n!.toFixed(precision));
}
