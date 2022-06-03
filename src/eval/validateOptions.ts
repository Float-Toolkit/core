import FloatToolkit from "..";

import { defaultOptions } from "../defaultOptions";
import { FloatToolkitError } from "../errors/FloatToolkitError";

/**
 * @internal
 */
export function validateOptions(options: any, checkFullObject?: boolean): void {
	if (options == null || typeof options !== "object" || options instanceof Array)
		throw new TypeError("Argument for 'options' must be an options object.");

	if (checkFullObject)
		Object.keys(defaultOptions).forEach((key) => {
			if (!(key in options)) throw new TypeError("Options object is incomplete");
		});

	Object.keys(options).forEach((key) => {
		if (!(key in defaultOptions)) throw new FloatToolkitError(`FloatToolkit does not support the option ${key}.`);

		const optionType = typeof options[key as FloatToolkit.OptionLabel];
		const expectedType = typeof defaultOptions[key as FloatToolkit.OptionLabel];

		if (optionType !== expectedType) throw new FloatToolkitError(`${key} must be a property of type '${expectedType}'.`);
	});
}
