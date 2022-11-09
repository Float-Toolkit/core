import { readdirSync, readFileSync } from "fs";

const isTsFile = (path: string): boolean => path.endsWith(".ts");
const isSourceFile = (path: string): boolean => isTsFile(path) && !path.endsWith(".test.ts") && !path.includes("__tests__/");

function allSourceFilesInDir(path: string): string[] {
	const files = readdirSync(path).map(filename => `${path}/${filename}`);
	files.filter(filename => !isTsFile(filename)).forEach(filename => files.push(...allSourceFilesInDir(filename)));

	return files.filter(filename => isSourceFile(filename));
}

it("should include a .js file extension in all source files", () => {
	allSourceFilesInDir("src").forEach(filename => {
		const content = readFileSync(filename).toString();
		const importStatements = content.split("\r\n").filter(line => line.match(/^import (\{ )?[\w, ]+( \})? from "\..+";$/));

		const allHaveExtension = importStatements.every(line => {
			if (line.endsWith('.js";')) return true;

			console.log(line);
			return false;
		});

		expect(allHaveExtension).toBe(true);
	});
});
