import FloatToolkit from "..";

import { round } from "./round";

import { precisionsSum } from "../get-precision/precisionsSum";

/**
 * @internal
 */
export function multiplyArrayItem(total: number, newNumber: number, precision?: FloatToolkit.Precision): number {
	const maxPrecision = precision ?? precisionsSum(total, newNumber);
	return round(total * newNumber, maxPrecision);
}
