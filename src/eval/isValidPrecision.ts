import { precisionRange } from "../Precision";

import isNumber from "./isNumber";

/**
 * @internal
 */
const isValidPrecision = (precision: any): boolean =>
	isNumber(precision) &&
	!isNaN(precision) &&
	precision % 1 === 0 &&
	precision >= precisionRange.min &&
	precision <= precisionRange.max;

export default isValidPrecision;
