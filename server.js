const express = require('express');

const projectRouter = require("./project/projectRouter");
const resourceRouter = require("./resource/resourceRouter");
const taskRouter = require("./task/taskRouter");

const server = express();

server.use(express.json());

server.use("/api/project", projectRouter);
server.use("/api/resource", resourceRouter);
server.use("/api/task", taskRouter);

module.exports = server