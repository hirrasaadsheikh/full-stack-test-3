const mongoose = require ("mongoose");

const toDo = mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("Todo", toDo);