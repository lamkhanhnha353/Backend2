const mongoose = require("mongoose");
const slug =  require('mongoose-slug-updater');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
  name: { type: String, maxLength: 255, required: true },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  videoID:  { type: String, maxLength: 255 },
  level: {type: String}, 
   slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', Course);
