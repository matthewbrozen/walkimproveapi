var mongoose = require('mongoose');

var reportSchema = mongoose.Schema({
  id: Number,
  intersection: String,
  direction: String,
  details: String
});

var Report = mongoose.model("Report", reportSchema);
module.exports = Report;
