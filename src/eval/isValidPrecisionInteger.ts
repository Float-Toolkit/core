import { FloatToolkitPrecisionInteger } from "../types/IntegerRange";

import { precisionRange } from "../precisionRange";
import { isNumber } from "./isNumber";

/**
 * @internal
 */
export const isValidPrecisionInteger: (precision: FloatToolkitPrecisionInteger) => boolean = (precision) =>
	isNumber(precision) && !isNaN(precision) && precision % 1 === 0 && precision >= precisionRange.min && precision < precisionRange.max;
