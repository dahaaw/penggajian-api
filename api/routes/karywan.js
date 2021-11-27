const {Router} = require('express');
const router = Router();
const {add, get, getOne, update} = require('../controllers/karyawan');

router.post("/", add);
router.get("/:id", getOne);
router.get("/", get);
router.put("/:id", update);

module.exports = router;