import FloatToolkit from "../index";

import validateNumbersArray from "../eval/validateNumbersArray";
import extractFirstNumber from "./extractFirstNumber";
import addArrayItem from "./addArrayItem";

/**
 * @internal
 */
export default function subtract(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);
	return newNumbers.reduce((total, newNumber) => addArrayItem(total, -newNumber, precision), firstNumber ?? 0);
}
