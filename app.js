const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hello from landing");
});

app.use("/api/v1", require("./api"));

module.exports = app;
