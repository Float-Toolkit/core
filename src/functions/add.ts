import { FloatToolkitPrecisionInteger } from "../types";

import { validateNumbersArray } from "../eval/validateNumbersArray";
import { addArrayItem } from "./addArrayItem";

/**
 * @internal
 */
export function add(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
	validateNumbersArray(numbers);

	return numbers!.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0) ?? 0;
}
