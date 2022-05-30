import { validateNumbersArray } from "../../eval/validateNumbersArray";

import { errorMessages } from "../__mocks__/errorMessages";

it("should accept an array of numbers and throw an error for anything else", () => {
	expect(() => validateNumbersArray([1, 2, 3])).not.toThrow();

	// @ts-expect-error
	expect(() => validateNumbersArray()).toThrow(errorMessages.arguments.numbersArray.notProvided);
	expect(() => validateNumbersArray(5)).toThrow(errorMessages.arguments.numbersArray.invalidType);
	expect(() => validateNumbersArray(["1", 2, Symbol(3)])).toThrow(errorMessages.arguments.numbersArray.invalidType);
});
