/**
 * @internal
 */
const isLargeNumber = (n: number): boolean => n.toString().includes("e");

export default isLargeNumber;
