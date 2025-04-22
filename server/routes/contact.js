const express = require("express");
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");
const router = express.Router();

// POST route to handle contact form submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact data to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Optionally send email notification (use Nodemailer)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password", // or use an app password if 2FA is enabled
      },
    });

    const mailOptions = {
      from: email,
      to: "your-email@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Respond with success message
    res.status(200).json({ message: "Message sent and saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send or save message." });
  }
});

module.exports = router;
