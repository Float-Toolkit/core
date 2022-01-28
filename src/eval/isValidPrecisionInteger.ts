import { FloatToolkitPrecisionInteger } from "../types/IntegerRange";
import { precisionRange } from "../precisionRange";

/**
 * @internal
 */
export const isValidPrecisionInteger = (precision: FloatToolkitPrecisionInteger) =>
	typeof precision === "number" && !isNaN(precision) && precision % 1 === 0 && precision >= precisionRange.min && precision < precisionRange.max;
