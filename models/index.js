// Importing the User and Thought models from their respective files
const User = require('./User');
const Thought = require('./Thought');

/*
 * Exporting the User and Thought models as a module.
 * This module can be imported in other files to use these models.
 */
module.exports = { User, Thought };
