import { FloatToolkitPrecisionInteger } from "../types";

import { isNumber } from "../eval/isNumber";
import { addArrayItem } from "./addArrayItem";
import { throwNumbersError } from "../errors/throwNumbersError";
import { isNumbersArray } from "../eval/isNumbersArray";

/**
 * @internal
 */
export function subtract(numbers?: number[], precision?: FloatToolkitPrecisionInteger): number {
	if (!isNumbersArray(numbers)) throwNumbersError();
	numbers = numbers!;

	const firstNumber = numbers.shift();
	if (!isNumber(firstNumber) && numbers.length > 0) throwNumbersError();

	return numbers.reduce((total, newNumber) => addArrayItem(total, -newNumber, precision), firstNumber!) ?? 0;
}
