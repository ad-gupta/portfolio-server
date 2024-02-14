import express from "express";
import { ContactForm } from "../controllers/contactCont.js";

const router = express.Router();

router.post('/contact', ContactForm);

export default router;