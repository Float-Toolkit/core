/**
 * @internal
 */
class FloatToolkitError extends Error {
	constructor(message?: string) {
		super(message);
	}

	override name = "FloatToolkitError";
}

export default FloatToolkitError;
