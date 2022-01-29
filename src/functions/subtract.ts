import { FloatToolkitPrecisionInteger } from "../types/IntegerRange";

import { isNumber } from "../eval/isNumber";
import { addArrayItem } from "./addArrayItem";
import { throwNumbersError } from "../errors/throwNumbersError";

/**
 * @internal
 */
export function subtract(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
	const firstNumber = numbers.shift();
	if (!isNumber(firstNumber) && numbers.length > 0) throwNumbersError();

	return numbers.reduce((total, newNumber) => addArrayItem(total, -newNumber, precision), firstNumber!);
}
