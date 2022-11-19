import FloatToolkit from "../index";

import isLargeNumber from "../eval/isLargeNumber";

/**
 * @internal
 */
export default function getPrecision(n: number): FloatToolkit.Precision {
	const nString = n.toString();

	const pointPosition = nString.indexOf(".") + 1;
	if (pointPosition === 0) return 1;

	const ePosition = isLargeNumber(n) ? nString.indexOf("e") : nString.length;
	return (ePosition - pointPosition) as FloatToolkit.Precision;
}
