const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    columnId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "list",
    },
    jobId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = taskSchema;
