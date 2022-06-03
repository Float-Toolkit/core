import FloatToolkit from "..";

import { round } from "./round";

import { getMaxPrecision } from "../get-precision/getMaxPrecision";

/**
 * @internal
 */
export function addArrayItem(total: number, newNumber: number, precision?: FloatToolkit.Precision): number {
	const maxPrecision = precision ?? getMaxPrecision(total, newNumber);
	return round(total + newNumber, maxPrecision);
}
