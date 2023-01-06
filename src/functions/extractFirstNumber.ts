import { FirstNumberExtractedArray } from "../index";

/**
 * @internal
 */
export default function extractFirstNumber(numbers: number[]): FirstNumberExtractedArray {
	const firstNumber = numbers.shift();
	return [firstNumber!, numbers];
}
