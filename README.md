# Activently

## Table of Contents

- [Description](#description)
- [Requirements](requirements)
- [Installation](#installation)
- [Screenshot](#screenshot)
- [Video](#video)
- [Questions](#questions)

## Description

Activently is an app that allows users to create activities that other people in the community can then join. As of this moment, users can see events happening, create events, delete event (if they are the creator), and even update events. They can also update their user profile. Yes, it seems a bit like myspace.

## Requirements

- Use Node.js and Express.js to create RESTful APIs (GET and POST routes, API keys)
- Templating Engine: Handlebars.js
- Database: MySQL
- ORM: Sequelize
- Hosting Provider: Heroku
- Authentication/Session Management: express-session and cookies
- One additional library not discussed in class
- Polished, responsive, interactive UI
- Folder structure meets MVC paradigm (`models`, `views`, `controllers`)
- Use environment variables to protect sensitive information
- Clean repository
- Quality README

## Installation

**Pre-Requisites**

- MySQL server installed and running

1. Download or clone this repository.
2. On your local machine, open a terminal in the top level directory of the code.
3. On the command line, run `npm install` to install dependencies.
4. Edit the `.env` file in the top level directory.
5. Enter your username in `DB_USER` and password in `DB_PW` for MySQL, then save the file
6. On the command line, run `npm run schema`. When prompted for a password, end your MySQL password. You will need to edit `package.json` if your username is not `root`.
7. Run `npm run start` to start the server.

## Screenshot

Here is a screenshot of it working.

![screenshot](./public/images/activently.png)

## Video

[Here is the video](./public/images/activently.webm)

## Questions

If you have any questions please check out [my github](https://github.com/Naomilounsbury/activently). Here is a link to the [project](https://still-peak-56139.herokuapp.com/)
