import { throwNumbersError } from "../errors/throwNumbersError";
import { isNumbersArray } from "./isNumbersArray";

/**
 * @internal
 */
export function validateNumbersArray(numbers: any): void {
	if (!isNumbersArray(numbers)) throwNumbersError();
}
