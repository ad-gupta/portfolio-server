import express from 'express'
// import mongoose from 'mongoose'
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
// const connectDB = () => {
//   mongoose.connect(process.env.MONGO_URI, {dbName: "portfolio"}).then(()=> {
//       console.log("Connected to DB")
//   }).catch((err) => {console.log(err)})
// }
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/form', contactRoute);

app.get('/', (req, resp) => {
  resp.send("Hello")
})

// app.get('/send', SendMail);

app.listen(port, () => {
  // connectDB();
  console.log(`server is running on port ${port}`)
})

