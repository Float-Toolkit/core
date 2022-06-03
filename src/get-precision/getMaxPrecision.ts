import FloatToolkit from "..";

import { getPrecision } from "./getPrecision";

/**
 * @internal
 */
export function getMaxPrecision(n1: number, n2: number): FloatToolkit.Precision {
	const n1Precision = getPrecision(n1);
	const n2Precision = getPrecision(n2);

	return Math.max(n1Precision, n2Precision) as FloatToolkit.Precision;
}
