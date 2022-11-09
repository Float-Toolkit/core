<div align="center" style="margin-bottom: 0.5rem">
	<img src="https://raw.githubusercontent.com/float-toolkit/core/HEAD/media/ftlogo.svg" width="50" />
</div>

<div align="center">

# Float Toolkit

[![NPM latest version](https://img.shields.io/npm/v/@float-toolkit/core?label=version&logo=npm)](https://npmjs.com/package/@float-toolkit/core)
[![NPM downloads](https://img.shields.io/npm/dt/@float-toolkit/core?logo=npm)](https://npmjs.com/package/@float-toolkit/core)
[![Tests status](https://img.shields.io/github/workflow/status/float-toolkit/core/Test%20with%20Jest?label=tests&logo=jest)](https://github.com/float-toolkit/core/actions/workflows/testWithJest.yml)
[![Code coverage with Codecov](https://img.shields.io/codecov/c/github/float-toolkit/core/tests?logo=codecov&logoColor=white)](https://codecov.io/gh/float-toolkit/core)
[![Contributor Covenant Code of Conduct](https://img.shields.io/badge/Contributor%20Covenant-2.1-5e0d73)](https://github.com/float-toolkit/core/blob/master/.github/CODE_OF_CONDUCT.md)

</div>

**Float Toolkit** is a lightweight, dependency-less [NPM](https://npmjs.com) package that allows you to work with _floats_
([floating-point numbers](https://en.wikipedia.org/wiki/Floating-point_arithmetic), or numbers with decimals).

You can round floats down to any number of digits, and perform accurate math operations (addition, subtraction, multiplication and
division) with them.

## Features

-   Accurate math operations
-   Round floats to any number of digits
-   No dependencies
-   TypeScript type declarations
-   Compatible with browsers and [Node.js](https://nodejs.org)
-   \> 95% code coverage

## Get started

### Installation

To add Float Toolkit to your project, run this command:

```bash
npm install @float-toolkit/core
```

### Usage

The package export is a class called `FloatToolkit`. Once you import it, you can create multiple `FloatToolkit` instances.

```js
import FloatToolkit from "@float-toolkit/core";
const ft = new FloatToolkit();

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(ft.round(0.1 + 0.2)); // 0.3
console.log(ft.add([0.1, 0.2])); // 0.3
```

### TypeScript

<div align="center" style="margin: 0.5rem 0">
	<img src="https://raw.githubusercontent.com/float-toolkit/core/HEAD/media/tsftlogo.svg" width="50" />
</div>

Float Toolkit is written in [TypeScript](https://typescriptlang.org). As such, you will have full type checking in your TypeScript
projects. The `FloatToolkit` class also serves as a namespace containing the type definitions used by the package.

#### Example:

```ts
import FloatToolkit from "@float-toolkit/core";

const createFT = (options: FloatToolkit.Options) => new FloatToolkit(5, options);
```

## Why use Float Toolkit?

In JavaScript, certain math operations with floats can return values with slight imperfections. This can result in unexpected
behavior.

```js
const result = 0.1 + 0.2; // 0.30000000000000004
console.log(result === 0.3); // false
```

Often, developers address this issue by accepting a certain range of floats that includes the exact one they are looking for, like
so:

```js
console.log(result >= 0.299 && result <= 0.301); // true
```

This is not ideal, since this condition also becomes true if another value falls in the same range, even if it's not the expected
value. For example, a value of `0.3005` would also pass this condition.

Another options is to round the number using Vanilla JS functions.

```js
const roundedResult = Number(result.toFixed(1)); // 0.3
console.log(roundedResult === 0.3); // true
```

This alternative fixes the main problem the previous solution has, but it also increases the amount of boilerplate code, since it
requires you to add `Number(variable.toFixed(precision))` for every single number.

The Float Toolkit syntax is much cleaner and more concise.

```js
const result = ft.add([0.1, 0.2]); // 0.3
console.log(result === 0.3); // true
```

## Support

Need help using Float Toolkit? Don't hesitate to reach out on
[GitHub Discussions](https://github.com/float-toolkit/core/discussions/categories/q-a)!

## Links

-   [Documentation](https://float-toolkit.web.app)
-   [GitHub](https://github.com/float-toolkit/core)
-   [npm](https://npmjs.com/package/@float-toolkit/core)

## Child packages

-   [Float Toolkit for React](https://npmjs.com/package/@float-toolkit/react)

## Contributing

Before creating an issue, please consider the following:

-   Refer to the [documentation](https://float-toolkit.web.app) to make sure the error is actually a bug and not a mistake of your
    own.
-   Make sure the issue hasn't already been reported or suggested.
-   After following these steps, you can file an issue using one of our
    [templates](https://github.com/float-toolkit/core/issues/new/choose). Please make sure to follow our
    [Code of Conduct](https://github.com/float-toolkit/core/blob/master/.github/CODE_OF_CONDUCT.md).
-   If you wish to [submit a pull request](https://github.com/float-toolkit/core/compare) alongside your issue, please follow our
    [contribution guidelines](https://github.com/float-toolkit/core/blob/master/.github/CONTRIBUTING.md).
