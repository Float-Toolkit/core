<div align="center" style="margin-bottom: 0.5rem">
	<img src="https://raw.githubusercontent.com/float-toolkit/core/HEAD/media/ftlogo.svg" width="50" />
</div>

<h1 align="center">Contribution guidelines</h1>

If you wish to contribute to the **Float Toolkit** codebase, feel free to fork the repository and submit a pull request.

## Steps

1.  Refer to the [documentation](https://float-toolkit.web.app) to make sure the error is actually a bug and not a mistake of your own.
1.  Make sure the issue hasn't already been reported or suggested.
1.  Fork and clone the repository, and checkout the corresponding branch (`docs` for documentation, `master` for anything else). **DO NOT** modify the `stable` branch.
1.  Make your changes (if necessary, add or modify documentation and tests to cover your changes).
1.  Run `npm run buildWithDocs` (or VSCode task _NPM: Build and generate documentation_) to run the tests and build the package and documentation (you can use `npm link` to try it locally).
1.  [Submit a pull request](https://github.com/float-toolkit/core/compare).
