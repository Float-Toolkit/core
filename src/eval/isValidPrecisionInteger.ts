import { isNumber } from "./isNumber.js";
import { precisionRange } from "../precisionRange.js";

/**
 * @internal
 */
export const isValidPrecisionInteger = (precision: any) =>
	isNumber(precision) && !isNaN(precision) && precision % 1 === 0 && precision >= precisionRange.min && precision < precisionRange.max;
