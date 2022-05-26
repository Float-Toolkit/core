import { isNumber } from "../eval/isNumber.js";

import { throwNumbersError } from "../errors/throwNumbersError.js";

type FirstNumberExtractedArray = [number, number[]];

/**
 * @internal
 */
export function extractFirstNumber(numbers: number[]): FirstNumberExtractedArray {
	const firstNumber = numbers.shift();
	if (!isNumber(firstNumber) && numbers.length > 0) throwNumbersError();

	return [firstNumber!, numbers];
}
