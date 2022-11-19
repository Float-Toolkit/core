import FloatToolkit from "../index";

import getMaxPrecision from "../get-precision/getMaxPrecision";
import round from "./round";

/**
 * @internal
 */
export default function addArrayItem(total: number, newNumber: number, precision?: FloatToolkit.Precision): number {
	const maxPrecision = precision ?? getMaxPrecision(total, newNumber);
	return round(total + newNumber, maxPrecision);
}
