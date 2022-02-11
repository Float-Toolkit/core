import { isNumber } from "./isNumber";
import { precisionRange } from "../precisionRange";

/**
 * @internal
 */
export const isValidPrecisionInteger = (precision: any) =>
	isNumber(precision) && !isNaN(precision) && precision % 1 === 0 && precision >= precisionRange.min && precision < precisionRange.max;
