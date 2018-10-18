const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Date, default: Date.now }


});

const appoint = mongoose.model("appoint", appointSchema);

module.exports = appoint;
