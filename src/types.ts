import { FloatToolkitOptions } from "./interfaces";

type PrependNextNum<A extends Array<unknown>> = A["length"] extends infer T ? (((t: T, ...a: A) => void) extends (...x: infer X) => void ? X : never) : never;
type EnumerateInternal<A extends Array<unknown>, N extends number> = { 0: A; 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A["length"] ? 0 : 1];
type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
type IntegerRange<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;

/**
 * An integer between 1 and 17, which can be used as a FloatToolkit's default precision.
 */
export type FloatToolkitPrecisionInteger = IntegerRange<1, 18>;

/**
 * @internal
 */
export type FTOptionLabel = keyof FloatToolkitOptions;
