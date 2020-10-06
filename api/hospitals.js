const { Router } = require("express");
const router = Router();
const { Patients, Hospitals } = require("../models");

router.get("/", async (req, res) => {
	const hospitals = await Hospitals.findAll();
	res.json(hospitals);
});

router.get("/byId/:hospitalId", async (req, res) => {
	const hospital = await Hospitals.findByPk(req.params.hospitalId);
	res.json(hospital);
});
router.get("/respirator_luck", async (req, res) => {
	const hospitals = await Hospitals.findAll({
		include: [
			{
				model: Patients,
				where: { status: "respiratory" }
			}
		]
	});
	const lucky = hospitals.filter(hospital => {
		return hospital.respiratorAmount - hospital.Patients.length < 5;
	});
	res.json(lucky);
});

module.exports = router;
