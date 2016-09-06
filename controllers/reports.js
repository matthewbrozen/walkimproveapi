var Report = require('../models/report');

function indexFunc(req, res, next) {
  Report.find({}, function(err, reports) {
    if (err) throw err;
    res.json({allReports: reports});
  });
}

function show(req, res, next) {
  Report.findOne({id: req.params.id}, function(err, report) {
    if (err) throw err;
    res.json({selectedReport: report});
  });
}

function update(req, res, next) {
  Report.findOne({id:req.params.id}, function(err, report) {
    if (err) throw err;
    if(req.body.intersection) {report.intersection= req.body.intersection;}
    if(req.body.direction) {report.direction = req.body.direction;}
    if(req.body.details) {report.details = req.body.details;}
    if(req.body.id) {report.id = req.body.id;}
    report.save(function(err, report) {
      res.json({updatedReport: report});
    });
  });
}

function create(req, res, next) {
  var report = new Report();
  report.intersection = req.body.intersection;
  report.direction = req.body.direction;
  report.details = req.body.details;
  report.id = req.body.id;
  report.save(function(err, report) {
    if (err) throw err;
    res.json({newReport: report});
  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Report.remove({id: id}, function(err) {
    if (err) throw err;
    res.json({message: "Report successfully deleted"});
  });
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  getOne: show,
  changeOne: update,
  deleteOne: destroy
}
