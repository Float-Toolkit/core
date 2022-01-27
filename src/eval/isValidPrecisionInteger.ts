import { FloatToolkitPrecisionInteger, precisionRange } from "../precisionRange";

const isValidPrecisionInteger = (precision: FloatToolkitPrecisionInteger) =>
	typeof precision === "number" && !isNaN(precision) && precision % 1 === 0 && precision >= precisionRange.min && precision < precisionRange.max;

export default isValidPrecisionInteger;
