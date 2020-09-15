const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/", (req, res) => {
	res.status(200).json({
		message: "hello this is the root API call",
	});
});

app.use("/test", (req, res) => {
	res.status(200).json({
		message: "hello this is TEST routes",
	});
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "build")));

	app.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log("server running at" + PORT);
});
