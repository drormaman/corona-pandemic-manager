"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class SymptomsByPatients extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	SymptomsByPatients.init(
		{
			patientId: { type: DataTypes.INTEGER, field: "patient_id" },
			symptomId: { type: DataTypes.INTEGER, field: "symptom_id" },
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "SymptomsByPatients",
			paranoid: true
		}
	);
	return SymptomsByPatients;
};
