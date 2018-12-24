const express = require('express');
const router = express.Router();

router.get('/', require('./services/find'));
router.post('/', require('./services/create'));
router.delete('/:id/:ProductId', require('./services/delete'));

module.exports = router;