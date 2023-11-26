require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
var cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

const DB_USERNAME = process.env.DB_USERNAME || "username";
const DB_PASSWORD = process.env.DB_PASSWORD || "password2";
const DB_NAME = process.env.DB_NAME || "db1";                 // TODO: change this to db1, db2, db3, db4, db5, or db6

// connect to MONGODB
const MONGO_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@fashiongptcluster.26u8sec.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.debug("Successfully connected to db");
  })
  .catch((err) => {
    console.error("Unable to connec to db", err);
  });

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("MongoDB Connection error");
  console.error(error);
});

// define DB models
const { Schema, model } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});

model("Task", TaskSchema);

// define API endpoints
app.get("/", (req, res) => {
    res.send({"hello": "world"});
});

app.get("/api/v1/tasks", (req, res) => {
  const Task = mongoose.model("Task");

  // nothing to do here, just some example to refer to
  Task.find({})
    .then((result) => {
      console.debug("Sending back result", result);
      res.status(200);
      res.send({
        result: result,
      });
    })
    .catch((err) => {
      console.error("Error retrieving tasks", err);
      res.status(500);
      res.send(err);
    });
});

// TODO: define more API endpoints here

// start listening on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
