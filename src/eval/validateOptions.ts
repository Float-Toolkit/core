import FloatToolkit from "../index.js";

import { defaultOptions } from "../defaultOptions.js";

/**
 * @internal
 */
export function validateOptions(options: any): void {
	if (options == null || typeof options !== "object" || options instanceof Array)
		throw new TypeError("Argument for 'options' must be an options object.");

	Object.keys(options).forEach((key) => {
		if (!(key in defaultOptions)) throw new FloatToolkit.ConfigError(`FloatToolkit does not support the option ${key}.`);

		const optionType = typeof options[key as FloatToolkit.OptionLabel];
		const expectedType = typeof defaultOptions[key as FloatToolkit.OptionLabel];

		if (optionType !== expectedType) throw new FloatToolkit.ConfigError(`${key} must be a property of type '${expectedType}'.`);
	});
}
