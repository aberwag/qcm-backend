# QCM Backend
Simple project for demo

## NPM
#### Commands
- `npm --version` Show npm version
- `npm config list` or `npm config ls` Show npm config [more](https://docs.npmjs.com/cli/config)
- `npm config list -l` Show all defaults values
- `npm install npm --global` or `npm i npm -g` Update npm
- `npm intsall <pkg>` or `npm i <pkg>` install package
- `npm unintsall <pkg>` uninstall package
- `npm list --depth=0` Show dependencies list
- `npm outdated` get all outdated local package or `npm outdated <pkg>` for specific package (add `-g` or `--global` for global package) [more](https://docs.npmjs.com/cli/outdated)
- `npm update` update all local package or `npm update <pkg>` for specific package (add `-g` or `--global` for global package)


#### Create NPM project
use command `npm init` to create `package.json`.
> You can also add `"private": true` to `package.json` to prevent accidental publication of private repositories

#### Modules
###### install module

`npm install --save-dev pkg>` or `npm i -D pkg>`

`npm install --save pkg>` or `npm i -S pkg>`

###### Example
Install `nodemon` module:
- from npm repository: `npm i -D nodemon`
- from github: `npm i -D git@github.com:remy/nodemon.git`
when you install modules, npm add new directory `node_modules` content modules sources

> DevDependencies is not installed in production environment

###### Specific version
- `npm i <pkg>` latest version
- `npm i <git repo url>` last version from git repository
- `npm i <folder>` from folder
- `npm i <pkg>@latest` latest version
- `npm i <pkg>@x.y.x` specific version
- `npm i <pkg>@x.y` latest minor version
- `npm i <pkg>@x` latest major version
- `npm i <pkg 1> <pkg 2>@version <pkg 3>@x ...` install multiple packages

###### update modules
Check for outdated packages
```bash
$ npm outdated
 Package  Current  Wanted  Latest  Location
 nodemon   1.16.1  1.17.1  1.17.1  qcm-backend
```
Update packages
`npm update` or `npm updtae <pkg>`

###### Use package
- inside project

```javascript
var pkg = require('pkg')
```
- On npm scripts

```json
  {
    "scripts": {
      "<command name>": "<command> <options>"
    }
  }
```
> Example
>```json
>  {
>    "scripts": {
>      "dev": "nodemon app.js"
>    }
>  }
>  ```

You can now run command:

`npm run <command name>`

> Example
>
>$`npm run dev`

- On terminal

After dependencies installation `npm i` you have a directory named `./node_modules/.bin`, this folder contain all commands for this project.

`./node_modules/.bin/<command script> <options>`

> Example
>
>$`./node_modules/.bin/nodemon app.js`
#### Structure of NPM project:
```
  ...
  ├── node_modules
  │ ├── .bin
  │ | ├── <command script>
  │ └── <pkg src>
  └── package.json
```