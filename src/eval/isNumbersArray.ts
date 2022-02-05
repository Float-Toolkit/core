/**
 * @internal
 */
export const isNumbersArray: (numbers: any) => boolean = (numbers) => numbers instanceof Array && numbers.every((n) => typeof n === "number");
