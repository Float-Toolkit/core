import { FloatToolkitPrecisionInteger } from "../types";

import { validateNumbersArray } from "../eval/validateNumbersArray";
import { extractFirstNumber } from "./extractFirstNumber";
import { round } from "./round";

/**
 * @internal
 */
export function divide(numbers: number[], precision: FloatToolkitPrecisionInteger): number {
	validateNumbersArray(numbers);
	numbers = numbers!;

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);

	const result = newNumbers.reduce((total, newNumber) => total / newNumber, firstNumber!) ?? 0;
	return round(result, precision);
}
