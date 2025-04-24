// index.js
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Resend } from 'resend';
import cors from 'cors'; // Add this import

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware - Add this before other middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:5173'], // Add your frontend URLs here
  credentials: true // This allows cookies/credentials to be sent
}));

// Middleware
app.use(bodyParser.json()); // To parse JSON bodies

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Route to send email
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Ensure that the required fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    // Log the request for debugging
    console.log('Received form submission:', { name, email, subject });

    // Send the email using Resend API
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // Must be a verified sender in Resend
      to: 'logixcelllabs@gmail.com', // Update with the recipient's email
      subject: subject || 'Contact Form Submission', // Default subject if not provided
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully!', response });
  } catch (error) {
  
    console.error('Error sending email:', error);
    
    // Handle error
    res.status(500).json({ success: false, message: 'Email sending failed.', error: error.message });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Resend Email Service is up and running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});