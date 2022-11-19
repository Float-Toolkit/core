import FloatToolkit from "../index";
import { precisionRange } from "../Precision";

import getPrecision from "./getPrecision";

/**
 * @internal
 */
export default function precisionsSum(n1: number, n2: number): FloatToolkit.Precision {
	const n1Precision = getPrecision(n1);
	const n2Precision = getPrecision(n2);

	const newPrecision = n1Precision + n2Precision;

	if (newPrecision >= precisionRange.max) return precisionRange.max;
	return newPrecision as FloatToolkit.Precision;
}
