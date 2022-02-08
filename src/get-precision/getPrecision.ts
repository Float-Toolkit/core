import { FloatToolkitPrecisionInteger } from "../types";

/**
 * @internal
 */
export function getPrecision(n: number): FloatToolkitPrecisionInteger {
	const nString = n.toString();
	const pointPosition = nString.indexOf(".") + 1;

	if (pointPosition === 0) return 1;
	return (nString.length - pointPosition) as FloatToolkitPrecisionInteger;
}
