import { isNumbersArray } from "./isNumbersArray.js";

import { throwNumbersError } from "../errors/throwNumbersError.js";

/**
 * @internal
 */
export function validateNumbersArray(numbers: any): void {
	if (!isNumbersArray(numbers)) throwNumbersError();
}
