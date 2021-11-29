const {Router} = require('express');
const router = Router();
const {add, get, getOne, update, deletee} = require('../controllers/cuti');

router.post("/", add);
router.get("/:id", getOne);
router.get("/", get);
router.put("/:id", update);
router.delete("/:id", deletee);

module.exports = router;