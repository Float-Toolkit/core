import { NrRange } from "ts-number-range";

export const precisionRange = Object.freeze({
	min: 1,
	max: 17,
});

export type _Precision = NrRange<typeof precisionRange.min, typeof precisionRange.max> | typeof precisionRange.max;
