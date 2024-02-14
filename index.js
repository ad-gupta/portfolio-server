import express from 'express'
import contactRoute from './Routes/contactRoute.js'
import dotenv from "dotenv";
import cors from 'cors'
import bodyParser from 'body-parser';
import nodemailer from "nodemailer";


const app = express();
const port = 8000
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
app.use(cors())
app.use(bodyParser.json());
app.use('/form', contactRoute);
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})


