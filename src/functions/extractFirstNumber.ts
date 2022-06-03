import FloatToolkit from "..";

/**
 * @internal
 */
export function extractFirstNumber(numbers: number[]): FloatToolkit.FirstNumberExtractedArray {
	const firstNumber = numbers.shift();
	return [firstNumber!, numbers];
}
