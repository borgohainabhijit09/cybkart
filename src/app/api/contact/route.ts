import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            businessName,
            businessType,
            location,
            contactPreference,
            phone,
            email,
            budgetConfirmed
        } = body;

        // Validate required fields
        if (!businessName || !phone || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure email transporter
        // NOTE: In production, use environment variables. 
        // For Gmail, you need to use an "App Password" if 2FA is enabled.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address (e.g., cybkart24@gmail.com)
                pass: process.env.EMAIL_PASS  // Your Gmail App Password
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'cybkart24@gmail.com',
            bcc: 'abhijitborgohain.gpt@gmail.com',
            subject: `New Lead: ${businessName} (${businessType})`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb;">New Strategy Call Request</h2>
          <p>You have received a new lead from the landing page booking form.</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px;">
            <h3 style="color: #1e293b; margin-top: 0;">Business Details</h3>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Business Type:</strong> ${businessType}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Budget Confirmed:</strong> ${budgetConfirmed ? 'Yes ($499 - $2,500)' : 'No'}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Information</h3>
            <p><strong>Preferred Contact:</strong> ${contactPreference}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
            Sent from Cybkart Global Website
          </p>
        </div>
      `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: `Failed to send email: ${error.message}` },
            { status: 500 }
        );
    }
}
