var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ExerciseSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        collection: 'exercises'
    },
    {
        timestamps: true
    });

var Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;