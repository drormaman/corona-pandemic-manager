const { Router } = require("express");
const router = Router();

router.use("/patients", require("./patients.js"));
router.use("/hospitals", require("./hospitals.js"));

module.exports = router;
