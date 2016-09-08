var express = require('express');
var router = express.Router();

var reportsController = require('../controllers/reports')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', reportsController.getAll)
router.get('/:id', reportsController.getOne);
router.put('/:id', reportsController.changeOne);
router.post('/', reportsController.addOne);
router.delete('/:id', reportsController.deleteOne);

module.exports = router;
