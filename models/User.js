const { Schema, model } = require('mongoose'); // Import the Schema and model from the mongoose package

// Define the UserSchema
const UserSchema = new Schema(
    {
        // Define the username field
        // It should be a string, unique, and required
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        // Define the email field
        // It should be a string, unique, and required
        // It should also match a valid email address
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        // Define the thoughts field
        // It should be an array of ObjectIds referencing the Thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // Define the friends field
        // It should be an array of ObjectIds referencing the User model
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
    {
        // Configure schema options
        // Set toJSON to include virtuals
        toJSON: {
            virtuals: true
        },
        // Don't include the _id field in the resulting JSON
        id: false
    }
);

// Define a virtual field named friendCount
// It calculates the length of the friends array
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Create a User model using the UserSchema
const User = model('User', UserSchema);

// Export the User model
module.exports = User;
