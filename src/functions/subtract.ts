import FloatToolkit from "..";

import { extractFirstNumber } from "./extractFirstNumber";
import { addArrayItem } from "./addArrayItem";

import { validateNumbersArray } from "../eval/validateNumbersArray";

/**
 * @internal
 */
export function subtract(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);
	return newNumbers.reduce((total, newNumber) => addArrayItem(total, -newNumber, precision), firstNumber ?? 0);
}
