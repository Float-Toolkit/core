/**
 * @internal
 */
export class FTConfigError extends Error {
	constructor(message?: string) {
		super(message);
	}

	override name = "FTConfigError";
}
