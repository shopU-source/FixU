import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phoneNumber, email, serviceType, message } = body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // Prepare the email content with a more professional format
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'arbazahmed1729@gmail.com',
      subject: `New Service Request: ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #f97316; border-bottom: 1px solid #e0e0e0; padding-bottom: 15px;">New Service Request</h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Service Type:</strong> ${serviceType}</p>
            <p><strong>Customer Name:</strong> ${fullName}</p>
            <p><strong>Contact Number:</strong> ${phoneNumber}</p>
            <p><strong>Email Address:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #4b5563;">Customer's Message:</h3>
            <p style="margin-bottom: 0;">${message || 'No additional message provided.'}</p>
          </div>
          
          <div style="font-size: 12px; color: #6b7280; margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
            <p>This is an automated message from the FixU service request system.</p>
            <p>Please respond to the customer within 24 hours.</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email' 
    }, { status: 500 });
  }
}