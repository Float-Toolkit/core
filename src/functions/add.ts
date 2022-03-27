import { FloatToolkitPrecisionInteger } from "../types.js";

import { validateNumbersArray } from "../eval/validateNumbersArray.js";
import { addArrayItem } from "./addArrayItem.js";

/**
 * @internal
 */
export function add(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
	validateNumbersArray(numbers);

	return numbers!.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0) ?? 0;
}
