import { FloatToolkitPrecisionInteger } from "../types.js";

import { validateNumbersArray } from "../eval/validateNumbersArray.js";
import { extractFirstNumber } from "./extractFirstNumber.js";
import { addArrayItem } from "./addArrayItem.js";

/**
 * @internal
 */
export function subtract(numbers?: number[], precision?: FloatToolkitPrecisionInteger): number {
	validateNumbersArray(numbers);
	numbers = numbers!;

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);

	return newNumbers.reduce((total, newNumber) => addArrayItem(total, -newNumber, precision), firstNumber!) ?? 0;
}
