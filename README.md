# e-commerce

![ISC License Badge](https://img.shields.io/badge/License-ISC-blueviolet)

## Description

This is a back-end application that allows the user to create, read, update, and delete items from a database using 'Insomnia' or 'Postman'.

## Table of Contents

- [Installation Instructions](#Installation-Instructions)
- [Usage Information](#Usage-Information)
- [Links](#links)
- [License](#License)
- [Contact](#Contact)

## Installation Instructions

Install NodeJS [HERE](https://nodejs.org/en/). Install MySQL Workbench and Shell for the application database [HERE](https://dev.mysql.com/downloads/windows/installer/8.0.html) and [HERE](https://dev.mysql.com/downloads/shell/). Open your terminal and navigate to the root level directory. Run `npm i` to install all necessary node packages. Copy and paste the schema.sql from the root directory into your MySQL workbench and run the code in order to generate the necessary tables for the database.

## Usage Information

First, run the command:

> `npm run seed`

It will seed test data into the database. Then, run the command:

> `npm start`

The server is now listening. From here, you can do whatever you'd like within the CRUD operations to the items in your Product, Category, and Tag tables in the database.

## Links

[Video Walkthrough](https://www.youtube.com/watch?v=RxIvTQT19IU&ab_channel=ZachRaab)  
 [GitHub](https://github.com/zachraab/e-commerce)
