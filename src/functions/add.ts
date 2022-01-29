import { FloatToolkitPrecisionInteger } from "../types/IntegerRange";

import { addArrayItem } from "./addArrayItem";

/**
 * @internal
 */
export function add(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
	return numbers.reduce((total, newNumber) => addArrayItem(total, newNumber, precision), 0);
}
