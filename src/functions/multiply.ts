import { FloatToolkitPrecisionInteger } from "../types";

import { validateNumbersArray } from "../eval/validateNumbersArray";
import { multiplyArrayItem } from "./multiplyArrayItem";
import { isNumber } from "../eval/isNumber";
import { throwNumbersError } from "../errors/throwNumbersError";

/**
 * @internal
 */
export function multiply(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
	validateNumbersArray(numbers);
	numbers = numbers!;

	const firstNumber = numbers.shift();
	if (!isNumber(firstNumber) && numbers.length > 0) throwNumbersError();

	return numbers.reduce((total, newNumber) => multiplyArrayItem(total, newNumber, precision), firstNumber!) ?? 0;
}
