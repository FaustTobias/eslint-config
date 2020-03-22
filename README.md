<h1 align="center">@faustt/eslint-config</h1>

<p align="center">
  General purpose ECMAScript and TypeScript eslint config
</p>

<br>

<p align="center">
  <a href="https://www.npmjs.com/package/@faustt/eslint-config">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@faustt/eslint-config">
  </a>
  <a href="https://packagephobia.now.sh/result?p=@faustt/eslint-config">
    <img alt="Install Size" src="https://badgen.net/packagephobia/install/@faustt/eslint-config">
  </a>
</p>

<br>


## Introduction

This is a general purpose eslint config for ECMAScript and TypeScript projects. It enforces some coding standards I personally prefer over the default ones. Prettier is also included to allow advanced formatting. Feel free to peek into the index.js file to see the configuration. TODO: Document the rules used in this config, duh.


## Getting started

### Install the package

using npm:

```
npm i -D @faustt/eslint-config
```


or using yarn:

```
yarn add -D @faustt/eslint-config
```


### Install all peer dependencies

using npm:

```
npm i -D @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x eslint@6.x eslint-config-prettier@6.x eslint-plugin-prettier@3.x prettier@2.x typescript
```


or using yarn:

```
yarn add -D @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x eslint@6.x eslint-config-prettier@6.x eslint-plugin-prettier@3.x prettier@2.x typescript
```


### Add to eslint configuration

inside an .eslintrc file:

```
{
    "extends": "@faustt"
}
```


or inside package.json:

```
{
    "devDependencies": {
        // ...
    },
    "eslintConfig": {
        "extends": "@faustt"
    }
}
```


### Configure Visual Studio Code

To configure Visual Studio Code to automatically fix on save install the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and enable it in the .vscode/settings.json files. Note: I recommend committing the following two files into your repository since contributors may or may not have eslint enabled at all in their user configs.

```
{
    "eslint.enable": true,
    "eslint.validate": [
        "javascript",
        "typescript"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.formatOnSave": false
    }
}
```

Add the eslint extension to the .vscode/extensions.json:

```
{
    "recommendations": [
        "dbaeumer.vscode-eslint"
    ]
}
```


### Add a tsconfig.json

This config requires a tsconfig.json in the root directory of the project as its rules require type information to be present. You can use your own or this one, doesn't really matter:

```
{
    "compilerOptions": {
        "strict": true,
        "target": "ESNext",
        "module": "CommonJS",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true
    },
    "include": [
        "src/**/*"
    ]
}
```


## Contributing

Issues or pull requests are welcome! \o/


## Maintainer

[Tobias Faust](https://github.com/FaustTobias)
