import IntegerRange from "./types/IntegerRange";

/**
 * @internal
 */
export const precisionRange = {
	min: 0,
	max: 18,
};

export type FloatToolkitPrecisionInteger = IntegerRange<0, 18>;
