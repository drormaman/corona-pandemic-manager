const { Router } = require("express");
const router = Router();

router.use("/patients", require("./patients.js"));

module.exports = router;
