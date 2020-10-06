require("dotenv").config();
module.exports = {
	development: {
		username: process.env.DB_user,
		password: process.env.DB_password,
		database: process.env.DB_name,
		host: process.env.DB_host,
		dialect: "mysql",
		define: { underscored: true }
	},
	test: {
		username: "root",
		password: null,
		database: "db_test",
		host: "127.0.0.1",
		dialect: "mysql",
		define: { underscored: true }
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql"
	}
};
