import { throwNumbersError } from "../errors/throwNumbersError";
import { isNumbersArray } from "../eval/isNumbersArray";
import { FloatToolkitPrecisionInteger } from "../types";

import { addArrayItem } from "./addArrayItem";

/**
 * @internal
 */
export function add(numbers?: number[], precision?: FloatToolkitPrecisionInteger): number {
	if (!isNumbersArray(numbers)) throwNumbersError();

	return numbers!.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0) ?? 0;
}
