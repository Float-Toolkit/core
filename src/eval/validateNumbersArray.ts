import { isNumbersArray } from "./isNumbersArray";
import { throwNumbersError } from "../errors/throwNumbersError";

/**
 * @internal
 */
export function validateNumbersArray(numbers: any): void {
	if (!isNumbersArray(numbers)) throwNumbersError();
}
