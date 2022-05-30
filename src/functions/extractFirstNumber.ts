import FloatToolkit from "../index.js";

/**
 * @internal
 */
export function extractFirstNumber(numbers: number[]): FloatToolkit.FirstNumberExtractedArray {
	const firstNumber = numbers.shift();
	return [firstNumber!, numbers];
}
