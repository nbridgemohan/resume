import { NextApiRequest, NextApiResponse } from 'next';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, company, phone } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields: name, email, and message are required' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Invalid email format' 
    });
  }

  try {
    // Initialize Mailgun
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
    });

    // Check if API key is configured
    if (!process.env.MAILGUN_API_KEY) {
      console.error('MAILGUN_API_KEY environment variable is not set');
      return res.status(500).json({ 
        message: 'Email service configuration error' 
      });
    }

    // Format the email content
    const emailBody = `
New contact form submission from Bridgemohan Technologies website:

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
This message was sent from the contact form on bridgemohan.com
    `.trim();

    // Send email using Mailgun
    const data = await mg.messages.create('tech-support.bridgemohan.com', {
      from: 'Bridgemohan Technologies Contact Form <postmaster@tech-support.bridgemohan.com>',
      to: ['Nicholas <nbridgemohan@gmail.com>'],
      subject: `New Contact Form Submission from ${name}`,
      text: emailBody,
      'h:Reply-To': email, // This allows you to reply directly to the person who submitted the form
    });

    console.log('Email sent successfully:', data);
    
    return res.status(200).json({ 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    // Handle different types of Mailgun errors
    if (error.status) {
      return res.status(error.status).json({ 
        message: `Email service error: ${error.message}` 
      });
    }
    
    return res.status(500).json({ 
      message: 'Failed to send email. Please try again later or contact us directly.' 
    });
  }
} 