const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Task = require("./task.model.js");

const columnSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [Task],
});

const Column = mongoose.model("Column", columnSchema);
module.exports = Column;
