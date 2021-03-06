
const express = require("express");

const usersController = require("./controllers/user.controller");
const batchController = require("./controllers/batch.controller");
const evaluationController = require("./controllers/evaluation.controller");
const studentController = require("./controllers/student.controller");
const submissionController = require("./controllers/submission.controller");


const app = express();

app.use(express.json());

app.use("/users", usersController); 
app.use("/batch", batchController);
app.use("/evaluation", evaluationController);
app.use("/student", studentController);
app.use("/submission", submissionController);

module.exports = app;