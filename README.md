## Next.JS Starter Template

1.  Initialize the project
    ```bash
    yarn create next-app <appname>
    ```
2.  Engine Locking

    - Create a `.nvmrc` file and update it with the node version as below.

    ```
    18.17.1
    ```

    - Create a `.npmrc` file and add the following line

    ```
    engine-strict=true
    ```

    - Update the `package.json` file with the correct version

    ```json
    "engines": {
        "node": ">=18.17.1",
        "yarn": ">=1.22.19",
        "npm": "please-use-yarn"
    },
    ```

3.  ESLint
    It comes with the project initialization so we do not need to install it separately.

    - Update `.eslintrc.json` file

    ```json
    {
      "extends": [
        "next",
        "next/core-web-vitals",
        "eslint:recommended"
        // "plugin:storybook/recommended" [if story book is included]
      ],
      "globals": {
        "React": "readonly"
      },
      "rules": {
        "no-unused-vars": [
          1,
          {
            "args": "after-used",
            "argsIgnorePattern": "^_"
          }
        ]
      }
      // uncomment if using storybook
      // "overrides": [
      //   {
      //     "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"]
      //   }
      // ]
    }
    ```

4.  Prettier

    - Create `.prettierignore` and update the content given below

    ```
    .yarn
    .next
    dist
    node_modules
    ```

    - Create `.prettierrc` and update the content given below

    ```
    {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "jsxSingleQuote": true
    }
    ```

    - Add the script in `package.json`

    ```
    "prettier": "prettier --write .",
    ```

5.  Git Hooks (Husky)

    - Install the package

    ```bash
    yarn add -D husky
    ```

    - Initialize husky

    ```bash
    npx husky install
    ```

    - Add a hook which runs on commit

    ```bash
    npx husky add .husky/pre-commit "yarn lint"
    ```

    - Add a hook which runs before push

    ```bash
    npx husky add .husky/pre-push "yarn build"
    ```

    - Update the script in `package.json`

    ```json
    "prepare": "husky install"
    ```

    - Add some commit linter package

    ```bash
    yarn add -D @commitlint/config-conventional @commitlint/cli
    ```

    - Create `commitlint.config.js` file with given content

    ```js
    // build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    // ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    // docs: Documentation only changes
    // feat: A new feature
    // fix: A bug fix
    // perf: A code change that improves performance
    // refactor: A code change that neither fixes a bug nor adds a feature
    // style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    // test: Adding missing tests or correcting existing tests

    module.exports = {
      extends: ['@commitlint/config-conventional'],
      rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
          2,
          'never',
          ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
          2,
          'always',
          [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test',
            'translation',
            'security',
            'changeset',
          ],
        ],
      },
    };
    ```

    - Add husky hook for commit message linting

		```bash
		npx husky add .hsuky/commit-msg 'npx --no -- commitlint --edit "$1"'
		```

6. VS Code Settings - Create `settings.json` inside `.vscode` folder

	- Update the file with below content

		```json
		{
			"editor.defaultFormatter": "esbenp.prettier-vscode",
			"editor.formatOnSave": true,
			"editor.codeActionsOnSave": {
				"source.fixAll": true,
				"source.organizeImports": true
			}
		}
		```

	(Optional step)
	- Create a `launch.json` file and update the content. This will help in debugging

		```json
		{

			"version": "0.1.0",
			"configurations": [
				{
					"name": "Next.js: debug server-side",
					"type": "node-terminal",
					"request": "launch",
					"command": "yarn dev"
				},
				{
					"name": "Next.js: debug client-side",
					"type": "chrome",
					"request": "launch",
					"url": "http://localhost:3000"
				},
				{
					"name": "Next.js: debug full stack",
					"type": "node-terminal",
					"request": "launch",
					"command": "yarn dev",
					// "console": "integratedTerminal",
					"serverReadyAction": {
						"pattern": "started server on .+, url: (https?://.+)",
						"uriFormat": "%s",
						"action": "debugWithChrome"
						}
				}
			],
			"resolveSourceMapLocations": ["${workspaceFolder}/**", "!**/node_modules/**"]
		}
		```
	
	- Install the given package
	```bash
	yarn add -D cross-env
	```
	- Update `package.json` file by replacing `dev` script
	```json
	"dev": "cross-env NODE_OPTIONS='--inspect' next dev"
	```
		
