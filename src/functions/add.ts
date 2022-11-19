import FloatToolkit from "../index";

import validateNumbersArray from "../eval/validateNumbersArray";
import addArrayItem from "./addArrayItem";

/**
 * @internal
 */
export default function add(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	return numbers.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0);
}
