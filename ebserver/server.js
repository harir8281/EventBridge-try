const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

app.use("/", require("./routes/MessageRoute"));

app.listen(port, () => console.log(`listening on ${port}`));
