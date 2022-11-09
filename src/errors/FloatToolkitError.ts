/**
 * @internal
 */
export class FloatToolkitError extends Error {
	constructor(message?: string) {
		super(message);
	}

	override name = "FloatToolkitError";
}
