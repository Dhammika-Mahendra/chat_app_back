const express= require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.routes.js");

const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();

// Use auth routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
	res.send("Hello World");
});


app.listen(PORT, () => {
	console.log(`Server Running on port ${PORT}`);
});