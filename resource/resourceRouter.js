const express = require('express');

const resource = require('./resourceDb')
const router = express.Router();

router.get("/", (req, res) => {
    resource.get()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get resource" + error });
        });
});

router.post("/", (req, res) => {
    const resourceData = req.body;

    resource.insert(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to add new resource" + error });
        });
});

module.exports = router