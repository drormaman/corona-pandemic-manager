const { Router } = require("express");
const router = Router();

router.use("/patients", require("./patients.js"));
router.use("/hospitals", require("./hospitals.js"));
router.use("/cities", require("./cities.js"));

module.exports = router;
