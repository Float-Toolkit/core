<div align="center" style="margin-bottom: 0.5rem">
	<img src="https://raw.githubusercontent.com/float-toolkit/core/HEAD/media/ftlogo.svg" width="50" />
</div>

<div align="center">

# Float Toolkit

[![NPM latest version](https://img.shields.io/npm/v/@float-toolkit/core?label=version&logo=npm)](https://www.npmjs.com/package/@float-toolkit/core)
[![NPM downloads](https://img.shields.io/npm/dt/@float-toolkit/core?logo=npm)](https://www.npmjs.com/package/@float-toolkit/core)

</div>

**Float Toolkit** is a lightweight, dependency-less [Node.js](https://nodejs.org) package that allows you to work with _floats_ ([floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_arithmetic), or numbers with decimals).

You can round floats down to any number of digits, and perform accurate math operations (addition, subtraction, multiplication and division) with them.

## Get started

### Installation

To add Float Toolkit to your Node.js project, run this command:

```sh-session
npm install @float-toolkit/core
```

### Usage

The package export is a `class` called `FloatToolkit`. Once you import it, you can create multiple `FloatToolkit` instances.

```js
import FloatToolkit from "@float-toolkit/core";
const ft = new FloatToolkit();
```

You are now ready to use Float Toolkit.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(ft.round(0.1 + 0.2)); // 0.3
console.log(ft.add([0.1, 0.2])); // 0.3
```

### TypeScript

<div align="center" style="margin: 0.5rem 0">
	<img src="https://raw.githubusercontent.com/float-toolkit/core/HEAD/media/tsftlogo.svg" width="50" />
</div>

Float Toolkit is written in [TypeScript](https://www.typescriptlang.org/). As such, the package is fully compatible with TypeScript projects. All of the type aliases and interfaces you might need can be imported into your project.

#### Example:

```ts
import FloatToolkit from "@float-toolkit/core";

const createFT = (options: FloatToolkit.Options) =>
	new FloatToolkit(5, options);
```

## Why use Float Toolkit?

In JavaScript, certain math operations with floats can return values with slight imperfections. This can result in unexpected behavior.

```js
const result = 0.1 + 0.2; // 0.30000000000000004
console.log(result === 0.3); // false
```

Often, developers address this issue by accepting a certain range of floats that includes the exact one they are looking for, like so:

```js
console.log(result >= 0.299 && result <= 0.301); // true
```

This is not ideal, since this condition also becomes true if another value falls in the same range, even if it's not the expected value. For example, a value of `0.3005` would also pass this condition.

Another options is to round the number using Vanilla JS functions.

```js
const roundedResult = Number(result.toFixed(1)); // 0.3
console.log(roundedResult === 0.3); // true
```

This alternative fixes the main problem the previous solution has, but it also increases the amount of boilerplate code, since it requires you to add `Number(variable.toFixed(precision))` for every single number.

The Float Toolkit syntax is much cleaner and more concise.

```js
const result = ft.add([0.1, 0.2]); // 0.3
console.log(result === 0.3); // true
```

## Links

-   [Documentation](https://float-toolkit.web.app/)
-   [GitHub](https://github.com/float-toolkit/core)
-   [npm](https://www.npmjs.com/package/@float-toolkit/core)

## Contributing

Before creating an issue, please consider the following:

-   Refer to the [documentation](https://float-toolkit.web.app/) to make sure the error is actually a bug and not a mistake of your own.
-   Make sure the issue hasn't already been reported or suggested.
-   After following these steps, you can read the [contribution guidelines](https://github.com/float-toolkit/core/blob/master/.github/CONTRIBUTING.md) and follow the steps to submit a PR.
