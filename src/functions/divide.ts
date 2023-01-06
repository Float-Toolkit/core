import { Precision } from "../index";

import validateNumbersArray from "../eval/validateNumbersArray";
import extractFirstNumber from "./extractFirstNumber";
import round from "./round";

/**
 * @internal
 */
export default function divide(numbers: number[], precision: Precision): number {
	validateNumbersArray(numbers);

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);

	const result = newNumbers.reduce((total, newNumber) => total / newNumber, firstNumber ?? 0);
	return round(result, precision);
}
