const router = require("express").Router();
let Column = require("../models/column.model");

router.route("/").get((req, res) => {
  Column.find()
    .then((columns) => res.json(columns))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const tasks = [];

  const newColumn = new Column({
    title,
    tasks: [],
  });

  newColumn
    .save()
    .then(() => res.json("New column added."))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
