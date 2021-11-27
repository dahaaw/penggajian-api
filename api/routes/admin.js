const {Router} = require('express');
const router = Router();
const {add} = require('../controllers/admin');

router.post("/", add);

module.exports = router;