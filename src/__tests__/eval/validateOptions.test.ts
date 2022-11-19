import validateOptions from "../../eval/validateOptions";
import errorMessages from "../__mocks__/errorMessages";

it("should accept a valid FloatToolkit.Options value and throw errors for anything else", () => {
	expect(() => validateOptions({})).not.toThrow();

	expect(() =>
		validateOptions({
			forceUseDefaultPrecision: true,
		})
	).not.toThrow();

	expect(() => validateOptions(["forceUseDefaultPrecision"])).toThrow(errorMessages.options.notAnObject);
	expect(() => validateOptions({}, true)).toThrow(errorMessages.options.incomplete);

	expect(() =>
		validateOptions({
			nonExistingOption: "whatever",
		})
	).toThrow(errorMessages.options.nonExistingOption);

	expect(() =>
		validateOptions({
			forceUseDefaultPrecision: "all",
		})
	).toThrow(errorMessages.options.invalidType);
});
