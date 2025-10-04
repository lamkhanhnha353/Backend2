const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, default: "", maxLength: 255 },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  create_Date: { type: Date, default: Date.now },
  up_Date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
