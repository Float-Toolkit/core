import { isNumbersArray } from "./isNumbersArray.js";

import { throwNumbersError } from "../errors/throwNumbersError.js";

/**
 * @internal
 */
export function validateNumbersArray(numbers: any): void {
	if (!numbers) throw new Error("Argument for 'numbers' was not provided.");
	if (!isNumbersArray(numbers)) throwNumbersError();
}
