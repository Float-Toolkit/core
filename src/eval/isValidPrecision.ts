import { precisionRange } from "../precisionRange";

import { isNumber } from "./isNumber";

/**
 * @internal
 */
export const isValidPrecision = (precision: any) =>
	isNumber(precision) &&
	!isNaN(precision) &&
	precision % 1 === 0 &&
	precision >= precisionRange.min &&
	precision < precisionRange.max;
