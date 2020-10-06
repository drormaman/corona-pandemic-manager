"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Patients extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Patients.init(
		{
			dateOfBirth: { type: DataTypes.DATE, field: "date_of_birth" },
			name: DataTypes.STRING,
			status: DataTypes.STRING,
			cityId: { type: DataTypes.INTEGER, field: "city_id", allowNull: false },
			hospitalId: {
				type: DataTypes.INTEGER,
				field: "hospital_id",
				allowNull: false
			},
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "Patients",
			paranoid: true
		}
	);
	return Patients;
};
