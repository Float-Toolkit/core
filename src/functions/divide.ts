import FloatToolkit from "..";

import { extractFirstNumber } from "./extractFirstNumber";
import { round } from "./round";

import { validateNumbersArray } from "../eval/validateNumbersArray";

/**
 * @internal
 */
export function divide(numbers: number[], precision: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);

	const result = newNumbers.reduce((total, newNumber) => total / newNumber, firstNumber ?? 0);
	return round(result, precision);
}
