export const precisionRange = Object.freeze({
	min: 1,
	max: 17,
});

type _LowerThanGenerator<N extends number, Counter extends any[], Accumulator extends number> = Counter["length"] extends N
	? Accumulator
	: _LowerThanGenerator<N, [any, ...Counter], Accumulator | Counter["length"]>;
type LowerThan<N extends number> = N extends N
	? number extends N
		? number
		: N extends 0
		? never
		: _LowerThanGenerator<N, [], 0>
	: never;
type IntegerRange<From extends number, To extends number> = Exclude<LowerThan<To>, LowerThan<From>>;
type IntegerRangeInclusive<From extends number, To extends number> = IntegerRange<From, To> | To;

export type _Precision = IntegerRangeInclusive<typeof precisionRange.min, typeof precisionRange.max>;
