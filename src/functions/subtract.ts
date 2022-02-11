import { FloatToolkitPrecisionInteger } from "../types";

import { validateNumbersArray } from "../eval/validateNumbersArray";
import { extractFirstNumber } from "./extractFirstNumber";
import { addArrayItem } from "./addArrayItem";

/**
 * @internal
 */
export function subtract(numbers?: number[], precision?: FloatToolkitPrecisionInteger): number {
	validateNumbersArray(numbers);
	numbers = numbers!;

	const [firstNumber, newNumbers] = extractFirstNumber(numbers);

	return newNumbers.reduce((total, newNumber) => addArrayItem(total, -newNumber, precision), firstNumber!) ?? 0;
}
