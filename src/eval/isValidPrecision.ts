import { precisionRange } from "../precisionRange";

import { isNumber } from "./isNumber";

/**
 * @internal
 */
export const isValidPrecision = (precision: any): boolean =>
	isNumber(precision) &&
	!isNaN(precision) &&
	precision % 1 === 0 &&
	precision >= precisionRange.min &&
	precision < precisionRange.max;
