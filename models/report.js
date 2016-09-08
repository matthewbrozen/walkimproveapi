var mongoose = require('mongoose');

var reportSchema = mongoose.Schema({
  intersection: String,
  direction: String,
  details: String
});

var Report = mongoose.model("Report", reportSchema);
module.exports = Report;
