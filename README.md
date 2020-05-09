# @modyqyw/eslint-config

An ESLint shareable config.

## Usage

- Install the config.

```sh
npm i eslint@~6.8.0 @modyqyw/eslint-config@~1.0.0 -D
```

For yarn, run scripts below.

```sh
yarn add eslint@~6.8.0 @modyqyw/eslint-config@~1.0.0 -D
```

- Set up.

```js
// .eslintrc.js
module.exports = {
  extends: ['@modyqyw']
}

```

- For VSCode
  - Install plugins.
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - Set up `Settings.json`. Then `F1` => `Format Document`(call vetur for `*.vue` files and prettier for other files) => Save File(call ESLint).

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact",
    "json": "jsonc"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
    "vue-html"
  ],
  "files.eol": "\n",
  "files.associations": {
    "*.js": "javascriptreact",
    "*.ts": "typescriptreact",
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.wpy": "html",
    "*.json": "jsonc",
    "*.nvue": "vue"
  },
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "wrapAttributes": true
    }
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  }
}
```

- For WebStorm
  - TODO

## More Config

- [@modyqyw/eslint-config-vue](https://github.com/Millcloud/eslint-config-vue)
- [@modyqyw/eslint-config-vue-ts](https://github.com/Millcloud/eslint-config-vue-ts)
- [@modyqyw/eslint-config-react](https://github.com/Millcloud/eslint-config-react)
- [@modyqyw/eslint-config-react-ts](https://github.com/Millcloud/eslint-config-react-ts)
- [@modyqyw/eslint-config-ts](https://github.com/Millcloud/eslint-config-ts)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present Millcloud