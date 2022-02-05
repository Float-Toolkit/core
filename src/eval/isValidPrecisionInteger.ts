import { precisionRange } from "../precisionRange";
import { isNumber } from "./isNumber";

/**
 * @internal
 */
export const isValidPrecisionInteger: (precision: any) => boolean = (precision) =>
	isNumber(precision) && !isNaN(precision) && precision % 1 === 0 && precision >= precisionRange.min && precision < precisionRange.max;
