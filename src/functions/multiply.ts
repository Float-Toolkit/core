import FloatToolkit from "../index.js";

import { validateNumbersArray } from "../eval/validateNumbersArray.js";
import { extractFirstNumber } from "./extractFirstNumber.js";
import { multiplyArrayItem } from "./multiplyArrayItem.js";

/**
 * @internal
 */
export function multiply(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);
	numbers = numbers!;

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);

	return newNumbers.reduce((total, newNumber) => multiplyArrayItem(total, newNumber, precision), firstNumber!) ?? 0;
}
