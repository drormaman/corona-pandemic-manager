const { Router } = require("express");
const router = Router();
const {
	Patients,
	Symptoms,
	Cities,
	Hospitals,
	CovidTests
} = require("../models");

router.get("/", async (req, res) => {
	const patients = await Patients.findAll({
		attributes: ["id", "name", "status"],
		include: [
			{ model: Symptoms, attributes: ["name"] },
			{ model: Cities, attributes: ["name"] },
			{ model: Hospitals, attributes: ["name"] },
			{ model: CovidTests, attributes: ["isSick"] }
		]
	});
	res.json(patients);
});

router.get("/byId/:patientId", async (req, res) => {
	const patient = await Patients.findByPk(req.params.patientId, {
		attributes: ["id", "name", "status"],
		include: [
			{ model: Symptoms, attributes: ["name"] },
			{ model: Cities, attributes: ["name"] },
			{ model: Hospitals, attributes: ["name"] },
			{ model: CovidTests, attributes: ["isSick"] }
		]
	});
	res.json(patient);
});

router.get("/byName/:patientName", async (req, res) => {
	console.log(req.params.patientName);
	const patient = await Patients.findOne({
		where: { name: req.params.patientName },
		attributes: ["id", "name", "status"],
		include: [
			{ model: Symptoms, attributes: ["name"] },
			// { model: Cities, attributes: ["name"] }
			// { model: Hospitals, attributes: ["name"] }
			{ model: CovidTests, attributes: ["isSick"] }
		]
	});
	res.json(patient);
});

router.get("/positive", async (req, res) => {
	console.log(req.params.patientName);
	const positivePatients = await Patients.findAll({
		include: [
			// 	{ model: Symptoms, attributes: ["name"] },
			// 	// { model: Cities, attributes: ["name"] }
			// 	// { model: Hospitals, attributes: ["name"] }
			{ model: CovidTests, attributes: ["isSick"], where: { isSick: true } }
		]
	});
	res.json(positivePatients);
});

router.post("/", async (req, res) => {
	const newPatient = req.body;
	const patient = await Patients.create({
		...newPatient,
		createdAt: new Date(),
		updatedAt: new Date()
	});
	const test = await CovidTests.create({ patientId: patient.id });
	const patientWithTest = await Patients.findOne({
		where: { id: patient.id },
		include: [
			{
				model: CovidTests
			}
		]
	});
	res.json(patientWithTest);
});

router.delete("/patients/:patientId", async (req, res) => {
	const deletedPatient = await Patients.destroy({
		where: { id: req.params.patientId }
	});
	res.send("deleted");
});

module.exports = router;
