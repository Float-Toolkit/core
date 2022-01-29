import { FloatToolkitPrecisionInteger } from "../types/IntegerRange";

import { isNumber } from "../eval/isNumber";
import { getMaxPrecision } from "../get-precision/getMaxPrecision";
import { round } from "./round";

/**
 * @internal
 */
export function sum(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
	return numbers.reduce((total, newNumber) => {
		if (!isNumber(newNumber)) throw new TypeError(`Array argument for 'numbers' must only contain numbers.`);

		const maxPrecision = precision ?? getMaxPrecision(total, newNumber);
		return round(total + newNumber, maxPrecision);
	}, 0);
}
