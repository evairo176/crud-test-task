const express = require("express");
const dbConnect = require("./config/db/dbConnect");
const dotenv = require("dotenv");
const path = require("path");
const userRoute = require("./routes/userRoute");
const { notFound, errorHandler } = require("./middleware/errorHandle");
dotenv.config();

const app = express();

dbConnect();
app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "public/data/photo")));
// user routes
app.use("/api/users", userRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running ${PORT}`));
