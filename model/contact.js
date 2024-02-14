import mongoose from "mongoose";

// Define the schema for contact
const contactSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

// Define and export the Contact model based on the contact schema
export default mongoose.model('Contact', contactSchema);

