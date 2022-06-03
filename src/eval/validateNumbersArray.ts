import { isNumbersArray } from "./isNumbersArray";

import { throwNumbersError } from "../errors/throwNumbersError";

/**
 * @internal
 */
export function validateNumbersArray(numbers: any): void {
	if (!numbers) throw new Error("Argument for 'numbers' was not provided.");
	if (!isNumbersArray(numbers)) throwNumbersError();
}
