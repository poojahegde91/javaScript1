### Project structure

The folders and files you see in this repositories, is how it is expected to be in projects, which are submitted for automated evaluation by Hobbes

	Project
	|
	├── data 			// If project needs any data file, it can be found here/placed here, if data is huge they can be mounted no need put it in your repository
	|
	├── test			// Test cases, which are executed using mocha, files should end with or suffix at end with 'test.js', these test cases can run before or in parallel to running of the application/program
	|
	├── output 			// When project is executed (ran), if any output files/data is generated, it has to be saved in this folder
	|
	├── index.js 			// The main entry point for the project, it need not be index.js if `npm start` in package.json points to correct main file
	|
	├── package.json 		// [*] Must have file, Hobbes will invoke npm commands, such as `npm start`, `npm test`, which refer to this file
	|
	├─ .eslintrc.js 		// Rules for Javascript lint checks, these are common or generic JS rules, project is evaluated against these rule, if any customization is needed in the rules, you can override this file in your project repo
	|
	├── .smellsrc.js 			// ESLint based code smell rules, project is evaluated against these rule, if any customization is needed in the rules, you can override this file in your project repo
	

> PS: All lint rule files are by default copied during the evaluation process, however if need to be customizing, you should copy from this repo and modify in your project repo

### Important instructions for Participants
> - We expect you to write the assignment on your own by following through the guidelines, learning plan, and the practice exercises
> - The code must not be plagirized, the mentors will randomly pick the submissions and may ask you to explain the solution
> - The code must be properly indented, code structure maintained as per the boilerplate and properly commented
> - Follow through the problem statement and stories shared with you

### Further Instructions on Release

*** Release 0.1.0 ***

- Ensure you run `npm install` before you proceed
- Run `npm start` to execute the program
- Run `npm test` to run test case for the program