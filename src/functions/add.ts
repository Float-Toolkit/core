import FloatToolkit from "..";

import { addArrayItem } from "./addArrayItem";

import { validateNumbersArray } from "../eval/validateNumbersArray";

/**
 * @internal
 */
export function add(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	return numbers.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0);
}
