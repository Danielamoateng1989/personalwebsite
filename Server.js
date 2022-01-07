const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  nodemailer = require("nodemailer"),
  creds = require("./config"),
  router = express.Router(),
  
  cors = require("cors");

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());
app.use("/", router);



