
![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)
[License: GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)

# E-commerce Back End

## Description
The code above appears to be a set of routes and functions for a backend server that handles CRUD operations for products, categories, and tags. The server uses Sequelize as an ORM to interact with a database and includes various endpoints for creating, reading, updating, and deleting data. The routes include logic for including associated data, such as products associated with a category or tags associated with a product. The code also includes error handling for various scenarios, such as when data is not found or when there are errors with database operations.

## Table of Contents

- [E-commerce Back End](#e-commerce-back-end)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Walkthrough Video](#walkthrough-video)
  - [Usage](#usage)
  - [Tools Used](#tools-used)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Questions](#questions)

## Installation 
To start with this app, users must have a database set up and configured with Sequelize. They would also need to install the necessary dependencies by running npm install in the project directory. Once the dependencies are installed, users can start the server by running npm start or node server.js. The server will listen on a specified port, which can be accessed through a web browser or an API client like Postman. Users can then request various endpoints to create, read, update, or delete data in the database. It's important to note that this app is only a backend server and does not include a frontend interface for users to interact with. Users must build their front end or use a third-party tool to interact with the server's API.

## Walkthrough Video
A video is available https://drive.google.com/file/d/1szaBdw8LfCRaGBmY1pdSZYJvNVFW9nou/view or scan ![VideoQRCode](./assets/qr-code.png.png)


## Usage
Users can use this app by making HTTP requests to the various endpoints exposed by the server. The endpoints allow users to perform CRUD operations on products, categories, and tags. For example, to create a new product, a user could send a POST request to the /api/products endpoint with a JSON payload containing the product's information. The server would then create a new product in the database and return a response with the newly created product's information. Similarly, to update an existing product, a user could send a PUT request to the /api/products/:id endpoint with a JSON payload containing the updated product information. The server would then update the product in the database and return a response with the updated product's information. To retrieve data, a user could send a GET request to the appropriate endpoint, such as /api/products to retrieve all products or  /api/products/:id to retrieve a specific product by its ID. The server would then return a response with the requested data. To delete data, a user could send a DELETE request to the appropriate endpoint, such as  /api/products/:id to delete a specific product by its ID. The server would then delete the product from the database and return a response indicating success or failure. Overall, users can use this app to manage and manipulate data in a database through a RESTful API.


## Tools Used
Express, Sequelize, Dotenv.


## License
![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)
[License: GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)


## How to Contribute  
Users can collaborate with this project at https://github.com/gabrielparada05/E-commerce-OMR-C13.

## Questions 
 Email: [gabrielparada05@gmail.com](mailto:gabrielparada05@gmail.com). Or, through my GitHub profile gabrielparada05, available at https://github.com/gabrielparada05.




