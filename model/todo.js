const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: false,
        default: true
    },
});

const Schema = mongoose.model('Todo', TodoSchema);
module.exports = Schema