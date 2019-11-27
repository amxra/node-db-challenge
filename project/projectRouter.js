const express = require('express');

const project = require('./projectDb')
const router = express.Router();

router.get("/", (req, res) => {
    project.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get projects" + error });
        });
});

router.post("/", (req, res) => {
    const projectData = req.body;
  
    project.insert(projectData)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(error => {
        res.status(500).json({ message: "Failed to add new project" + error});
      });
  });

  module.exports = router