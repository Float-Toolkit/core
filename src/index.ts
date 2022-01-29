import { FloatToolkitPrecisionInteger } from "./types/IntegerRange";
import { FloatToolkitOptions } from "./interfaces/FloatToolkitOptions";

import { isValidPrecisionInteger } from "./eval/isValidPrecisionInteger";
import { precisionRange } from "./precisionRange";
import { round } from "./functions/round";
import { sum } from "./functions/sum";

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

	round(n: number, precision = this.defaultPrecision): number {
		return round(n, precision);
	}

	sum(numbers: number[], precision?: FloatToolkitPrecisionInteger): number {
		if (this.options?.forceUseDefaultPrecision) precision = this.defaultPrecision;

		return sum(numbers, precision);
	}
}

export = FloatToolkit;
