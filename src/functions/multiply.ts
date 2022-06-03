import FloatToolkit from "..";

import { extractFirstNumber } from "./extractFirstNumber";
import { multiplyArrayItem } from "./multiplyArrayItem";

import { validateNumbersArray } from "../eval/validateNumbersArray";

/**
 * @internal
 */
export function multiply(numbers: number[], precision?: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);
	return newNumbers.reduce((total, newNumber) => multiplyArrayItem(total, newNumber, precision), firstNumber ?? 0);
}
