import { FloatToolkitPrecisionInteger } from "../types/IntegerRange";

import { isNumber } from "../eval/isNumber";
import { getMaxPrecision } from "../get-precision/getMaxPrecision";
import { round } from "./round";
import { throwNumbersError } from "../errors/throwNumbersError";

/**
 * @internal
 */
export function addArrayItem(total: number, newNumber: number, precision?: FloatToolkitPrecisionInteger): number {
	if (!isNumber(newNumber)) throwNumbersError();

	const maxPrecision = precision ?? getMaxPrecision(total, newNumber);
	return round(total + newNumber, maxPrecision);
}
