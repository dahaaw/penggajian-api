const {Router} = require('express');
const router = Router();
const {add, get} = require('../controllers/golongan');

router.post("/", add);
router.get("/", get);

module.exports = router;