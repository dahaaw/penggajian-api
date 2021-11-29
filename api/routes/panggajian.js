const {Router} = require('express');
const router = Router();
const {add, get, getOne, update, deletee} = require('../controllers/penggajian');

router.post("/", add);
router.get("/", get);

module.exports = router;