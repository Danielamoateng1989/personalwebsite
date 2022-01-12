const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

const app = express();


app.use(cors());


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message

  var mail = {
    from: name,
    to: process.env.EMAIL,
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

