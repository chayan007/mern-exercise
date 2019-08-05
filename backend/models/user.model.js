var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        }
    },
    {
        collection: 'users'
    },
    {
        timestamps: true
    });

var User = mongoose.model('User', UserSchema);

module.exports = User;