/**
 * @internal
 */
export const isNumbersArray = (numbers: any) => numbers instanceof Array && numbers.every((n) => typeof n === "number");
