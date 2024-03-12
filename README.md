# Social Network API

## Description

The application allows users to create, read, update, and delete users, thoughts, and reactions. The API uses Mongoose to interact with a MongoDB database.

## Table of Contents


- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)
- [Links](#links)


## Installation

1. Install [Node.js](https://nodejs.org/en/) if you haven't already.

2. Install [MongoDB](https://www.mongodb.com/) if you haven't already.

3. Run `npm install` in the project folder. This will install all the dependencies.

4. Run `node server.js` to start the server.

5. Visit `localhost:3001` in your browser to view the API documentation.

## Usage   

### Create User

`POST /api/users`

### Create Thought

`POST /api/thoughts`

### Update Thought

`PUT /api/thoughts/:thoughtId`

### Delete Thought

`DELETE /api/thoughts/:thoughtId`

### Create Reaction

`POST /api/thoughts/:thoughtId/reactions`

### Delete Reaction

`DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

### Update User

`PUT /api/users/:userId`

### Delete User

`DELETE /api/users/:userId`

### View User

`GET /api/users/:userId`

### View All Users

`GET /api/users`

### View All Thoughts

`GET /api/thoughts`

### View Single Thought

`GET /api/thoughts/:thoughtId`

### View Single Reaction

`GET /api/thoughts/:thoughtId/reactions/:reactionId`

### View All Reactions

`GET /api/thoughts/:thoughtId/reactions`

### View All Users

`GET /api/users`

### View All Users with thoughts and reactions by ID

`GET /api/users/:userId`


## Questions

### If you have any questions, please reach out to me on Github: https://github.com/nickegg11

### If you have any feedback, please reach out to me on Github: https://github.com/nickegg11


## License

Licensed under the MIT License.

## Links

### [GitHub-Repo](https://github.com/nickegg11/Social-Network-API)
### [Video-Link](https://drive.google.com/file/d/16u2o9Ikwp3WGuX6_QLHpto1YEBZi_eEO/view)




    
