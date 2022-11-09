import { precisionRange } from "../precisionRange.js";

import { isNumber } from "./isNumber.js";

/**
 * @internal
 */
export const isValidPrecision = (precision: any): boolean =>
	isNumber(precision) &&
	!isNaN(precision) &&
	precision % 1 === 0 &&
	precision >= precisionRange.min &&
	precision < precisionRange.max;
