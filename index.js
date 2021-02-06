const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const routeRouter = require("./route");
const port = process.ENV.PORT || 5000;

app.use(express.json());
app.use("/", routeRouter);

mongoose.set("useCreateIndex", true);

mongoose
  .connect(process.env.APP_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
    console.log("DB Connected");
  });
