const { Schema, model, Types } = require('mongoose');  // Import mongoose package and its Schema and model functions
const dateFormat = require('../utils/dateFormat');       // Import dateFormat function from utils directory

/* 
 * Define the reactionSchema, a sub-schema for reactions to a thought.
 * ReactionSchema includes fields for reactionId, reactionBody, username, and createdAt.
 * createdAt is a getter that returns a formatted date.
 */
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,   // Define reactionId field as an ObjectId
            default: () => new Types.ObjectId(),  // Set default value to a new ObjectId
        },
        reactionBody: {
            type: String,   // Define reactionBody field as a string
            required: true,  // Set reactionBody as required
            maxlength: 280  // Set maximum length to 280 characters
        },
        username: {
            type: String,   // Define username field as a string
            required: true  // Set username as required
        },
        createdAt: {
            type: Date,   // Define createdAt field as a date
            default: Date.now,  // Set default value to current date and time
            get: createdAtVal => dateFormat(createdAtVal)   // Set getter to format the date
        },
    },
    {
        toJSON: {
            getters: true  // Set toJSON to include getters
        },
        id: false  // Do not include an _id field in the resulting JSON
    }
);

/* 
 * Define the thoughtSchema, the main schema for thoughts.
 * thoughtSchema includes fields for thoughtText, createdAt, username, and reactions.
 * createdAt is a getter that returns a formatted date.
 * reactions is an array of reactionSchema objects.
 */
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,   // Define thoughtText field as a string
            required: true,  // Set thoughtText as required
            maxlength: 280  // Set maximum length to 280 characters
        },
        createdAt: {
            type: Date,   // Define createdAt field as a date
            default: Date.now,  // Set default value to current date and time
            get: createdAtVal => dateFormat(createdAtVal)   // Set getter to format the date
        },
        username: {
            type: String,   // Define username field as a string
            required: true  // Set username as required
        },
        reactions: [reactionSchema]  // Define reactions field as an array of reactionSchema objects
    },
    {
        toJSON: {
            virtuals: true,  // Set toJSON to include virtuals
            getters: true  // Set toJSON to include getters
        },
        id: false  // Do not include an _id field in the resulting JSON
    }
);

/* 
 * Define a virtual field named reactionCount that calculates the length of the reactions array.
 */
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

/* 
 * Create a Thought model using the thoughtSchema and export it.
 */
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;  // Export the Thought model

