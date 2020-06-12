const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const extAccountSchema = new Schema({
  type: String, //twitter, facebook, native
  uid: String,
});

const intAccountSchema = new Schema({
  username: String,
  password: String,
});

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
  },
  {
    timestamps: true,
  },
  {
    accounts: [Account],
  },
  {
    columns: [Column],
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
