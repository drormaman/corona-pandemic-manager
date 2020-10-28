const { Router } = require("express");
const router = Router();
const { Patients, Hospitals, Cities } = require("../models");

router.get("/", async (req, res) => {
	const cities = await Cities.findAll({
		include: [
			{
				model: Patients,
				attributes: { include: [[sequelize.fn("COUNT"), "numofpatients"]] }
			}
		]
	});
	res.json(cities);
});

module.exports = router;
