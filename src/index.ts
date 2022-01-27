import isValidPrecisionInteger from "./eval/isValidPrecisionInteger";
import { FloatToolkitPrecisionInteger, precisionRange } from "./precisionRange";

class FloatToolkit {
	constructor(defaultPrecision: FloatToolkitPrecisionInteger = 14) {
		this.defaultPrecision = defaultPrecision;
	}

	#precision: FloatToolkitPrecisionInteger = 14;

	get defaultPrecision() {
		return this.#precision;
	}

	set defaultPrecision(precision) {
		if (!isValidPrecisionInteger(precision))
			throw new TypeError(`defaultPrecision must be an integer between ${precisionRange.min} and ${precisionRange.max - 1}.`);

		this.#precision = precision;
	}
}

export = FloatToolkit;
