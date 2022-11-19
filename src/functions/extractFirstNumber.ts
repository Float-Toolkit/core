import FloatToolkit from "../index";

/**
 * @internal
 */
export default function extractFirstNumber(numbers: number[]): FloatToolkit.FirstNumberExtractedArray {
	const firstNumber = numbers.shift();
	return [firstNumber!, numbers];
}
