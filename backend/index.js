const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const elementRoute = require("./routes/element");
const statusRoute = require("./routes/status");

dotenv.config();
const app = express();
const port = 7777;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to DB"));
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/element", elementRoute);
app.use("/status", statusRoute);

app.listen(port, () =>
  console.log(`server is starting at port ${port}, press ctrl + C to terminal`)
);
