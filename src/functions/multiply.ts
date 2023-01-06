import { Precision } from "../index";

import validateNumbersArray from "../eval/validateNumbersArray";
import extractFirstNumber from "./extractFirstNumber";
import multiplyArrayItem from "./multiplyArrayItem";

/**
 * @internal
 */
export default function multiply(numbers: number[], precision?: Precision): number {
	validateNumbersArray(numbers);

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);
	return newNumbers.reduce((total, newNumber) => multiplyArrayItem(total, newNumber, precision), firstNumber ?? 0);
}
