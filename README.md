# React SSR Boilerplate

React SSR Boilerplate is a github repository that helps anyone create new JavaScript applications. Giving you a technically sound and well tested starting point for your application.

### Technology stack

- React
- React Router
- Redux
- Koa2
- styled-components

### Features

- SSR
- module styles
- Enables building universal SPAs
- A modern redux architecture
- Fast server side hot reloading
- 99% ES-next code-base
- Hot reloading unit tests in a browser
- A comprehensive functional and unit test suite
- A lucid code-base
- A pretty console output
- Useful debugging tools

### Prerequsits

Node.js.0+、Redis、MySQL

### Quick Start

1. install Node.js
2. install Redis and MySQL
3. create postgres database:

    `{ database: 'server', order: 'utf8mb4_general_ci', owner: 'root', password: '123456', host: '127.0.0.1' }`

4. clone and start this project

    ```bash
    $ git clone git@github.com:zhuowenli/react-ssr-boilerplate.git <directory-name>
    $ cd <directory-name>
    $ yarn
    $ mv example.env .env
    $ yarn db:migrate
    $ yarn dev
    ```

    With the default `.env` file, this will start your application in development mode on port 9001. It also provides a configuration for running the debugger with a useful console output.

5. Open a browser window at `localhost:9001`.

### Commands

**Developing**

```bash
$ npm run dev
```

Builds and serves app with hot reloading and debugging support.

**Build client-side app**

```
npm run build
```

Creates bundles and assets into `./src/static` directory. Reads `.env` but always uses production Webpack configuration.

**Start the server**

Set the NODE_ENV flag to production in your .env file.

```
npm run start
```

Expects bundles and assets to exist in the `./src/static` directory. Runs the server in production mode.

**Unit test development server**

```
npm run test:server
```

Start a test server using Mocha and Webpack-middleware. Provides a browser based testing environment. Loading tests from within `./src` where extension is `.test.js`.


**Unit test single run**

```
npm run test:unit
```

Runs the test suite in a node environment through mocha, once.

**Functional/integration tests run**

```
npm run test:func
```

Runs functional tests inside `./test/functional` directory.

**Lint**

```
npm run lint
```

Reads `.eslintrc` for linting configurations.

**Coverage**

```
npm run coverage
npm run coverage:check
```

### Console

```bash
$ yarn console

# insert users table
> models.User.create({name: '卓文理', email: '531840344@qq.com', password: '12345678', passwordConfirmation: '12345678'})

# search users table
> models.User.findOne({ where: { email: '531840344@qq.com' } }).then(user => console.log(user.dataValues))

# insert articles table
> models.Article.create({title: 'Hello world!', content: '这是一条通过console插入的数据', user_id: 1, description: '相关描述', release_at: '2017-09-01 12:00:00'})
```

### Libraries

React SSR Boilerplate uses the following libraries at its core:

##### Build tools
- [webpack](https://webpack.github.io/) - A module bundler.
- [babel](http://babeljs.io/) - A JavaScript compiler.
- [webpack-isomorphic-tools](https://www.npmjs.com/package/webpack-isomorphic-tools) - Library for isomorphic rendering.

##### Server
- [koa](http://koajs.com/) - A lightweight server framework.
- [koa-router](https://github.com/alexmingoia/koa-router) - Router middleware for koa.
- [socket.io](http://socket.io/) - A node engine for WebSocket communication.
- [redux-via-socket.io](https://www.npmjs.com/package/redux-via-socket.io) - An adapter for sharing redux actions over WebSockets.
- [Sequelize](http://docs.sequelizejs.com/) - Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects MySQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

##### Universal Application
- [react](http://facebook.github.io/react/) - A library for building interfaces.
- [redux](http://redux.js.org/) - A library for state management.
- [react-router](https://github.com/reactjs/react-router) - A routing library for React.
- [react-router-redux](https://github.com/reactjs/react-router-redux) - Binding between react-router and redux.
- [redux-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware) - A redux middleware for creating asynchronous actions.
- [styled-components](https://www.styled-components.com/) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅

##### Styling
- [SCSS](http://sass-lang.com/guide) - A popular CSS preprocessor.
- [PostCSS](http://postcss.org/) - CSS transformations with JavaScript.
