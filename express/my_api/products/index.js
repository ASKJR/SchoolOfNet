const express = require('express');
const router  = express.Router();

router.get('/:id?', require('./services/find'));
router.post('/', require('./services/create'));
router.put('/:id', require('./services/update'));
router.patch('/:id', require('./services/update'));
router.delete('/:id', require('./services/delete'));

module.exports = router;