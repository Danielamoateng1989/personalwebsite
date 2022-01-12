const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

const app = express();


app.use(cors());

app.post('/sendmessage', (req, res, next) => {
  res.send('Message sent')
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`listening on port ${port}`)
});
