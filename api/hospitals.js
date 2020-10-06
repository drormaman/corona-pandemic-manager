const { Router } = require("express");
const router = Router();
const {
	Patients,
	Symptoms,
	Cities,
	Hospitals,
	CovidTests
} = require("../models");

module.exports = router;
