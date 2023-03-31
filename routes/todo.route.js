const express = require("express");
const router = express.Router();
const {getTodo,getTodoById,deleteTodo,createTodo,markTodo,completedTodo,incompleteTodo} = require("../controllers/todo.controllers");
const authMiddleware = require('../middleware/authMiddleware');


router.post("/post",authMiddleware.requireAuth,createTodo)
router.get("/get",authMiddleware.requireAuth,getTodo)
router.get("/complete",authMiddleware.requireAuth,completedTodo)
router.get("/incomplete",authMiddleware.requireAuth,incompleteTodo)
router.get("/get/:id",authMiddleware.requireAuth,getTodoById)
router.patch("/done/:id",authMiddleware.requireAuth,markTodo)
router.delete("/delete/:id",authMiddleware.requireAuth,deleteTodo)

module.exports = router;