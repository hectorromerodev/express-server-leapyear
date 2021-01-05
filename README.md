# Challenge
## Create a server with express and recibe a year then determinate if it's leap year or not.

# What I learned
### I learn to ...

# Technology used
+ [Express js](https://expressjs.com/)
+ [Node js](https://nodejs.org/en/)
+ [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
+ [prettier]()
+ [eslint](https://eslint.org/)

# Tools
+ [VS Code](https://code.visualstudio.com/)

# Steps to init
+ npm install express dotenv
+ npm install -D nodemon prettier eslint eslint-config-prettier eslint-plugin-prettier
+ Add files .prettierrc.json config
  + `{
      "semi": false,
      "singleQuote": true,
      "tabWidth": 2,
      "useTabs": false,
      "bracketSpacing": true,
      "arrowParens": "avoid"
    }`
+ Add files .eslintrc.json config
  + ` {
      "parserOptions": {
        "ecmaVersion": 2018
      },
      "extends": [
        "eslint:recommended",
        "prettier"
      ],
      "env": {
        "es6": true,
        "node": true,
        "mocha": true
      },
      "rules": {
        "no-console": "warn"
      }
    }
  `
+ npx mrm lint-staged (to prettier the changes)
+ Change script on package.json: 
  + `"dev": "set DEBUG=app:*&& nodemon index",`
  + `"start": "NODE_ENV=production node index"`
+ Add config/index.js (To add environment configurations)
+ git init (To init git config)
