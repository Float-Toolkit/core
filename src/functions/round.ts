import FloatToolkit from "../index";
import { precisionRange } from "../Precision";

import isNumber from "../eval/isNumber";
import isValidPrecision from "../eval/isValidPrecision";
import isLargeNumber from "../eval/isLargeNumber";

/**
 * @internal
 */
export default function round(n?: number, precision?: FloatToolkit.Precision): number {
	if (!isNumber(n)) throw new TypeError("Argument for 'n' must be a number.");
	if (!isValidPrecision(precision))
		throw new RangeError(`Argument for 'precision' must be an integer between ${precisionRange.min} and ${precisionRange.max}.`);

	return Number(isLargeNumber(n!) ? n!.toPrecision(precision! + 1) : n!.toFixed(precision));
}
