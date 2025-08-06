const express = require('express');
const router = express.Router();
const ContactSubmission = require('../models/ContactSubmission');
const nodemailer = require('nodemailer');

// Configure your transporter (use environment variables for real credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your email password or app password
  },
});

router.post('/', async (req, res) => {
  try {
    const submission = new ContactSubmission(req.body);
    await submission.save();

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'nesandaniel23@gmail.com', // replace with your admin email
      subject: `New Contact Form Submission from ${req.body.name}`,
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Subject: ${req.body.subject}
        Message: ${req.body.message}
      `,
    });

    res.status(201).json({ message: 'Submission saved and email sent' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save submission or send email' });
  }
});

module.exports = router;