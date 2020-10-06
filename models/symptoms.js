"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Symptoms extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsToMany(models.Patients, {
				through: models.SymptomsByPatients,
				uniqueKey: "symptomId"
			});
		}
	}
	Symptoms.init(
		{
			name: DataTypes.STRING,
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "Symptoms",
			paranoid: true
		}
	);
	return Symptoms;
};
