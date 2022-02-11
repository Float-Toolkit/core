import { FloatToolkitPrecisionInteger } from "./types";
import { FloatToolkitOptions } from "./interfaces";

import { defaultOptions } from "./defaultOptions";
import { isValidPrecisionInteger } from "./eval/isValidPrecisionInteger";
import { precisionRange } from "./precisionRange";
import { round } from "./functions/round";
import { add } from "./functions/add";
import { subtract } from "./functions/subtract";
import { validateOptions } from "./eval/validateOptions";
import { multiply } from "./functions/multiply";

/**
 * A FloatToolkit contains methods to round floats and perform accurate math operations with them.
 * Its behavior can be configured to cover the program's needs.
 */
class FloatToolkit {
	/**
	 * @param defaultPrecision The precision (number of decimals) to use if not specified in the function itself. Can be changed later. Default value if 10.
	 * @param options An optional configuration object.
	 *
	 * @example
	 * import FloatToolkit from "@float-toolkit/core";
	 * const ft = new FloatToolkit(10, { forceUseDefaultPrecision: true });
	 */
	constructor(defaultPrecision: FloatToolkitPrecisionInteger = 10, options: FloatToolkitOptions = {}) {
		this.defaultPrecision = defaultPrecision;
		this.resetOptions(options);
	}

	/**
	 * @internal
	 */
	#precision: FloatToolkitPrecisionInteger = 10;

	/**
	 * @internal
	 */
	#options: FloatToolkitOptions = {};

	/**
	 * An integer between 1 and 17.
	 * Defines the precision (number of decimals) to use by default, if the precision is not specified in the function itself.
	 */
	get defaultPrecision(): FloatToolkitPrecisionInteger {
		return this.#precision;
	}

	set defaultPrecision(precision: FloatToolkitPrecisionInteger) {
		if (!isValidPrecisionInteger(precision))
			throw new TypeError(`defaultPrecision must be an integer between ${precisionRange.min} and ${precisionRange.max - 1}.`);

		this.#precision = precision;
	}

	/**
	 * The options object for this FloatToolkit.
	 */
	get options(): Readonly<FloatToolkitOptions> {
		return Object.freeze(this.#options);
	}

	setOptions(options: FloatToolkitOptions): Readonly<FloatToolkitOptions> {
		validateOptions(options);

		this.#options = { ...this.#options, ...options };
		return this.options;
	}

	/**
	 * Resets the options object for this FloatToolkit to its default values and returns the new object.
	 *
	 * @param options An optional configuration object to apply after resetting.
	 * @returns The new options object.
	 *
	 * @example
	 * ft.resetOptions({ forceUseDefaultPrecision: true }); // Default options with forceUseDefaultPrecision set to true.
	 */
	resetOptions(options: FloatToolkitOptions = {}): Readonly<FloatToolkitOptions> {
		validateOptions(options);

		this.#options = { ...defaultOptions, ...options };
		return this.options;
	}

	/**
	 * @internal
	 */
	#choosePrecision(precisionParam?: FloatToolkitPrecisionInteger): FloatToolkitPrecisionInteger | undefined {
		if (!precisionParam && this.options.forceUseDefaultPrecision) return this.defaultPrecision;

		return precisionParam;
	}

	/**
	 * Rounds a number to the specified precision, or to the FloatToolkit's default precision.
	 *
	 * @param n The number to round.
	 * @param precision	The precision to use. If not specified, the FloatToolkit's default precision is used instead.
	 * @returns The rounded number.
	 *
	 * @example
	 * ft.round(0.1 + 0.2); // 0.3 if the precision is set to 16 or lower.
	 */
	round(n: number, precision = this.defaultPrecision): number {
		return round(n, precision);
	}

	/**
	 * Adds two or more numbers, and rounds the sum.
	 *
	 * **NOTE:** By default, this method does not use the FloatToolkit's default precision. Instead, it calculates the best precision to use based on the original
	 * numbers (dynamic precision). To always use the default precision, set the `forceUseDefaultPrecision` option to `true`.
	 *
	 * @param numbers The numbers to add.
	 * @param precision The precision to use instead of the one chosen by the function.
	 * @returns The rounded sum
	 *
	 * @example
	 * ft.add([0.1, 0.2]); // 0.3 if using dynamic precision, or if the precision is set to 16 or lower.
	 */
	add(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
		precision = this.#choosePrecision(precision);

		return add(numbers, precision);
	}

	/**
	 * Subtracts two or more numbers (starting with the second number, all of the numbers are subtracted from the first one), and rounds the difference.
	 *
	 * **NOTE:** By default, this method does not use the FloatToolkit's default precision. Instead, it calculates the best precision to use based on the original
	 * numbers (dynamic precision). To always use the default precision, set the `forceUseDefaultPrecision` option to `true`.
	 *
	 * @param numbers The numbers to subtract.
	 * @param precision The precision to use instead of the one chosen by the function.
	 * @returns The rounded difference
	 *
	 * @example
	 * ft.subtract([0.8, 0.1, 0.3]); // 0.4 if using dynamic precision, or if the precision is set to 15 or lower.
	 */
	subtract(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
		precision = this.#choosePrecision(precision);

		return subtract(numbers, precision);
	}

	multiply(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
		precision = this.#choosePrecision(precision);

		return multiply(numbers, precision);
	}
}

export = FloatToolkit;
