import FloatToolkit from "../index.js";

/**
 * @internal
 */
export function getPrecision(n: number): FloatToolkit.Precision {
	const nString = n.toString();
	const pointPosition = nString.indexOf("./index.js") + 1;

	if (pointPosition === 0) return 1;
	return (nString.length - pointPosition) as FloatToolkit.Precision;
}
