import FloatToolkit from "../index.js";

import { validateNumbersArray } from "../eval/validateNumbersArray.js";
import { addArrayItem } from "./addArrayItem.js";

/**
 * @internal
 */
export function add(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	return numbers!.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0) ?? 0;
}
