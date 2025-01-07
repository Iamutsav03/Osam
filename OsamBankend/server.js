const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const MongooseConnect = require("./config/Db");
const UserRoutes = require("./routes/UserRoutes");

dotenv.config();
MongooseConnect();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user",UserRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
