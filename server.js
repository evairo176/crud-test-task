const express = require("express");
var cors = require("cors");
const dbConnect = require("./config/db/dbConnect");
const dotenv = require("dotenv");
const path = require("path");
const userRoute = require("./routes/userRoute");
const { notFound, errorHandler } = require("./middleware/errorHandle");
const pokemonRoute = require("./routes/pokemonRoute");
dotenv.config();

const app = express();
app.use(cors());

dbConnect();
app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "public/data/photo")));
// user routes
app.use("/api/users", userRoute);
app.use("/api/pokemon", pokemonRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server is running ${PORT}`));
