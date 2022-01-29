import { FloatToolkitPrecisionInteger } from "./types/IntegerRange";
import { FloatToolkitOptions } from "./interfaces/FloatToolkitOptions";

import { isValidPrecisionInteger } from "./eval/isValidPrecisionInteger";
import { precisionRange } from "./precisionRange";
import { round } from "./functions/round";
import { add } from "./functions/add";
import { subtract } from "./functions/subtract";

class FloatToolkit {
	constructor(defaultPrecision: FloatToolkitPrecisionInteger = 14, options?: FloatToolkitOptions) {
		this.defaultPrecision = defaultPrecision;
		this.options = options;
	}

	#precision: FloatToolkitPrecisionInteger = 14;
	options?: FloatToolkitOptions;

	get defaultPrecision(): FloatToolkitPrecisionInteger {
		return this.#precision;
	}

	set defaultPrecision(precision: FloatToolkitPrecisionInteger) {
		if (!isValidPrecisionInteger(precision))
			throw new TypeError(`defaultPrecision must be an integer between ${precisionRange.min} and ${precisionRange.max - 1}.`);

		this.#precision = precision;
	}

	#choosePrecision(precisionParam?: FloatToolkitPrecisionInteger): FloatToolkitPrecisionInteger | undefined {
		if (!precisionParam && this.options?.forceUseDefaultPrecision) return this.defaultPrecision;

		return precisionParam;
	}

	round(n: number, precision = this.defaultPrecision): number {
		return round(n, precision);
	}

	add(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
		precision = this.#choosePrecision(precision);

		return add(numbers, precision);
	}

	subtract(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
		precision = this.#choosePrecision(precision);

		return subtract(numbers, precision);
	}
}

export = FloatToolkit;
