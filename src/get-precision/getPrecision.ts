import { FloatToolkitPrecisionInteger } from "../types/IntegerRange";

/**
 * @internal
 */
export function getPrecision(n: number): FloatToolkitPrecisionInteger {
	const nString = n.toString();
	const pointPosition = nString.indexOf(".") + 1;

	return (nString.length - pointPosition) as FloatToolkitPrecisionInteger;
}
