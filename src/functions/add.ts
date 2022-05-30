import FloatToolkit from "../index.js";

import { addArrayItem } from "./addArrayItem.js";

import { validateNumbersArray } from "../eval/validateNumbersArray.js";

/**
 * @internal
 */
export function add(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	return numbers.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0);
}
