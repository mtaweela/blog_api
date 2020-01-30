# Blog Api

## Getting Started

### Prerequisites

To install the project, you need to get [Node.js](https://nodejs.org/), [npm](https://www.npmjs.com/) and MySql runing on your machine.

Also, you will need to install [sequilize cli](https://github.com/sequelize/cli) by:

```bash
npm install express-generator -g 
npm install -g sequelize-cli
```

### Installing
Once you have the previous mentioned tools, you could download the source code and go to the directory containing the source code and run:

```bash
npm install
```

After installing, you will need to edit the configuration file inside `server/config` folder with your database configuration.

After that, you could run the following commands to create the database and migrate the tables and add some seed data to the database:

```
npm run dbcreate
npm run migrate
npm run seed
npm start
```

finally you could run:
```bash
npm run dev
```
to satrt the server on port 5050.

#### Accessing the API documentation

You could Find Postman API documentation on the [link](https://documenter.getpostman.com/view/4447171/SWTBexvB?version=latest):

or you could import the postman collection from this link:
`https://www.getpostman.com/collections/3803fbca0ab3f4bbf9a7`

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [npm](https://www.npmjs.com/) - Package manager for JavaScript and the world’s largest software registry.
* [Express](https://expressjs.com/) - Minimalist web framework for Node.js.
* [sequelize](https://sequelize.org/)
* [mysql](https://www.mysql.com/)
* [hapi/joi](https://www.npmjs.com/package/@hapi/joi) - Used for validating data sent in the request or Json data formats.
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [passport](http://www.passportjs.org/): used authentication middleware for Node.js.
* [eslint](https://eslint.org/): for finding and fixing problems in your JavaScript code.
