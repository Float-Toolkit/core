/**
 * @internal
 */
const isNumbersArray = (numbers: any): boolean => numbers instanceof Array && numbers.every(n => typeof n === "number");

export default isNumbersArray;
