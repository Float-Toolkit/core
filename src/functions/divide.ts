import FloatToolkit from "../index.js";

import { validateNumbersArray } from "../eval/validateNumbersArray.js";
import { extractFirstNumber } from "./extractFirstNumber.js";
import { round } from "./round.js";

/**
 * @internal
 */
export function divide(numbers: number[], precision: FloatToolkit.Precision): number {
	validateNumbersArray(numbers);

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);

	const result = newNumbers.reduce((total, newNumber) => total / newNumber, firstNumber ?? 0);
	return round(result, precision);
}
