var express = require('express');
var router = express.Router();

var reportsController = require('../controllers/reports')

router.get('/', reportsController.getAll)
router.get('/:id', reportsController.getOne);
router.put('/:id', reportsController.changeOne);
router.post('/', reportsController.addOne);
router.delete('/:id', reportsController.deleteOne);

module.exports = router;
