"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CovidTests extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Patients);
		}
	}
	CovidTests.init(
		{
			patientId: { type: DataTypes.INTEGER, field: "patient_id" },
			isSick: { type: DataTypes.BOOLEAN, field: "is_sick" },
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "CovidTests",
			paranoid: true
		}
	);
	return CovidTests;
};
