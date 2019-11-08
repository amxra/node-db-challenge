const express = require('express');

const task = require('./taskDb')
const router = express.Router();

router.get("/", (req, res) => {
    task.get()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get task" + error });
        });
});

router.post("/", (req, res) => {
    const taskData = req.body;

    task.insert(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to add new task" + error });
        });
});

module.exports = router