# TS Portfolio
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![](https://i.imgur.com/PPQkwoN.png)

## [Deployed application](https://johnny-nguyen.herokuapp.com)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Links other READMEs in repo](#links-to-other-client-and-server-readmes)

## Description

Johnny Nguyen's portfolio that contains information about him, links to his work, methods of contacting him, and resume.  Within the links to his work contain various projects, professional and personal details.

This portfolio is built with React, Express and has a server-side PostgreSQL database.

## Installation

To use this repository, fork and clone it to your device via a `git clone` in the terminal/shell.

### Installation for local use (requires PostgreSQL):

<ol>
<li>At the root folder, install required packages via <code>npm install</code> in the terminal. This will install both client and server-side packages.</li>

<li>Note the <code>.env.EXAMPLE</code> files in both the client and server folders.  If you have an <a href="https://unsplash.com/developers">Unsplash</a> API key, insert it into the <i><b>client-side</b></i> <code>.env.EXAMPLE</code> as the value to <code>REACT_APP_UNSPLASH_API_KEY</code>. Rename the file to <code>.env</code>. <br/> <br/>

With the <code>.env.EXAMPLE</code> in the <i><b>server folder</b></i>, fill out the <code>ADMIN_PW</code> if running a seed with an administrator user, otherwise fill in your local Postgres password for <code>root</code>. Rename the file to <code>.env</code>. Otherwise a placeholder background image will be used.</li>

<li>Optional: To seed using my seed data, in the root folder, run an <code>npm run seed</code>. Note the administrator user in <code>userSeed.js</code> in the seeders folder that uses <code>ADMIN_PW</code> as an environment variable.  You will get an error seeding if that is not filled out.</li>
<li>Once packages, <code>.env</code>, and, if applicable, seed data are incorporated, run an <code>npm run develop</code> in the root folder.</li>
</ol>

NPM packages used in this repo:\
Client:
- [React](https://reactjs.org/)
- [React-Query](https://react-query.tanstack.com/)
- [react-router-dom v6](https://reactrouter.com/)
- [Ant-Design](https://ant.design/)
- [SASS](https://sass-lang.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [momentjs](https://momentjs.com/)

Server:
- [ExpressJS](https://expressjs.com/)
- [node-postgres](https://www.npmjs.com/package/pg)
- [sequelize](https://sequelize.org/docs/v6/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [node-cron](https://www.npmjs.com/package/node-cron)

## Usage

Projects page is populated through the Postgres database.  Adding to to the database will be implemented in the future.  Fetching from the Unsplash API is optional--there are placeholder images in the case of no response from the API.

## Credits

- [UC Berkeley Bootcamp](https://bootcampspot.com/)
- [Unsplash](https://unsplash.com)
- [w3 Schools](https://www.w3schools.com/)
- [Mozilla](https://developer.mozilla.org/)
- [Heroku](https://www.heroku.com/)

## License

This application is licensed under [MIT](https://opensource.org/licenses/MIT).

## Links to other client and server Readmes

- [Client](client/README.md)
- [Server](server/README.md)
