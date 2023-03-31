const Todo = require("../models/todo.model")

//get the todo list
const getTodo = async(req, res) => {
    try {
        const getTodo = await Todo.find();
        res.status(200).json(getTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//get the todo list by ID
const getTodoById = async(req, res) => {
    try {
        const getById = await Todo.findById(req.params.id);
        res.status(200).json(getById);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//create the todo list
const createTodo = async(req, res) => {
    const createTodo = new Todo({
        task: req.body.task,
        done: req.body.done,
    });
    try {
        const savedTodo = await createTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//mark todo as done by ID
const markTodo = async(req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, { done: false }, { new: true });
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json(err);
    }
}
//delete the todo list by ID
const deleteTodo = async(req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//get completed Todos
const completedTodo = async(req, res) => {
    try {
        const complete = await Todo.find({done: true});
        res.status(200).json(complete);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//get incomplete todos
const incompleteTodo = async(req, res) => {
    try {
        const incomplete = await Todo.find({done: false});
        res.status(200).json(incomplete);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
module.exports = {
    getTodo,
    getTodoById,
    deleteTodo,
    createTodo,
    markTodo,
    completedTodo,
    incompleteTodo
};