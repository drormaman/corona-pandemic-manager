"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Patients", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			date_of_birth: {
				type: Sequelize.DATE
			},
			name: {
				type: Sequelize.STRING
			},
			status: {
				type: Sequelize.STRING
			},
			city_id: {
				type: Sequelize.INTEGER
			},
			hospital_id: {
				type: Sequelize.INTEGER
			},
			deleted_at: {
				type: Sequelize.DATE
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Patients");
	}
};
