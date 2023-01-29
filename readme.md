
# Blog Website

This is a fully-functioning blog website built using a combination of Node.js, Express.js, MongoDB, Mongoose.js, EJS, and various frontend technologies.

## Deployment

1.  Clone the repository

bashCopy code

`git  clone  https://github.com/hamzaxezzat/articles`

2.  Install dependencies

Copy code

`npm install`

3.  Create a .env file in the root directory and add the following variables:

phpCopy code

`DB_CONNECTION=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>SECRET_KEY=<yoursecretkey>`

4.  Start the server

sqlCopy code

`npm  start`

The website will be running on [http://localhost:3000](http://localhost:3000/)

## Features

-   User authentication and authorization
-   CRUD functionality for creating, reading, updating, and deleting blog posts
-   Responsive design for optimal viewing on various devices
-   Admin panel for managing blog posts and users

## Built With

-   [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
-   [Express.js](https://expressjs.com/) - Web application framework for Node.js
-   [MongoDB](https://www.mongodb.com/) - NoSQL database
-   [Mongoose.js](https://mongoosejs.com/) - MongoDB object modeling for Node.js
-   [EJS](https://ejs.co/) - Embedded JavaScript templating
-   [Bootstrap](https://getbootstrap.com/) - Frontend framework for responsive design

## Author

-   [Hamza Ezzat](https://github.com/hamzaxezzat)


I hope you enjoy using this blog website as much as I enjoyed building it! Feel free to reach out to me with any questions or feedback.