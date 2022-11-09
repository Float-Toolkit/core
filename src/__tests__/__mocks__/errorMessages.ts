export const errorMessages = {
	defaultPrecision: /defaultPrecision must be an integer between \d+ and \d+\./,

	options: {
		notAnObject: "Argument for 'options' must be an options object.",
		incomplete: "Options object is incomplete",
		nonExistingOption: /FloatToolkit does not support the option \w+\./,
		invalidType: /\w+ must be a property of type '(bigint|boolean|function|number|object|string|symbol|undefined)'\./,
	},

	arguments: {
		n: "Argument for 'n' must be a number.",

		numbersArray: {
			notProvided: "Argument for 'numbers' was not provided.",
			invalidType: "Argument for 'numbers' must be an array of numbers.",
		},

		precision: /Argument for 'precision' must be an integer between \d+ and \d+\./,
	},
};
