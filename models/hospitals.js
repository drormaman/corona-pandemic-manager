"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Hospitals extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Hospitals.init(
		{
			name: DataTypes.STRING,
			maxCapacity: { type: DataTypes.INTEGER, field: "max_capacity" },
			respiratorAmount: { type: DataTypes.INTEGER, field: "respirator_amount" },
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "Hospitals",
			paranoid: true
		}
	);
	return Hospitals;
};
