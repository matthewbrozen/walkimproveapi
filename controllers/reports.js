var Report = require('../models/report');


//index
function indexFunc(req, res, next) {
  Report.find({}, function(err, reports) {
    if (err) throw err;
    res.json({allReports: reports});
  }).select('-_v');
}

//show a report
function show(req, res, next) {
  Report.findOne({_id: _id}, function(err, report) {
    if (err) throw err;
    res.json({selectedReport: report});
  }).select('-_v');
}


//update a report
function update(req, res, next) {
  var id = request.params.id;
  Report.findOne({_id:id}, function(err, report) {
    if (err) throw err;
    if(req.body.intersection) {report.intersection= req.body.intersection;}
    if(req.body.direction) {report.direction = req.body.direction;}
    if(req.body.details) {report.details = req.body.details;}

    report.save(function(err, report) {
      res.json({updatedReport: report});
    });
  }).select('-_v');
}

//create a report
function create(req, res, next) {
  var report = new Report();
  report.intersection = req.body.intersection;
  report.direction = req.body.direction;
  report.details = req.body.details;
  // report.id = req.body.id;
  report.save(function(err, report) {
    if (err) throw err;
    res.json({newReport: report});
  });
}

//destroy a report
function destroy(req, res, next) {
  var id = req.params.id;
  console.log(id);
  Report.remove({_id: id}, function(err) {
    if (err) throw err;
    res.json({message: "Report successfully deleted"});
  }).select('-_v');
}

//export functions
module.exports = {
  getAll: indexFunc,
  addOne: create,
  getOne: show,
  changeOne: update,
  deleteOne: destroy
}
