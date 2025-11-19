import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { company, name, email, phone, country, message } = await req.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_EMAIL_USER, // Use environment variables
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Recruitment 4U <${email}>`,
      to: "recruitment4u.hrm@gmail.com",
      subject: `${name}`,
      html: `
      <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recruitment 4U</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #f5f5f5;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #0056b3;
            padding: 25px;
            text-align: center;
        }
        .header h1 {
            color: white;
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 25px;
        }
        .details {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 6px;
            margin-bottom: 20px;
        }
        .detail-row {
            margin-bottom: 12px;
            display: flex;
        }
        .label {
            font-weight: bold;
            color: #495057;
            width: 100px;
            flex-shrink: 0;
        }
        .value {
            color: #212529;
        }
        .message-box {
            background-color: #e9ecef;
            padding: 15px;
            border-left: 4px solid #0056b3;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #6c757d;
            border-top: 1px solid #e9ecef;
        }
        .logo {
            max-width: 180px;
            height: auto;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #0056b3;
            color: white !important;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <!-- Replace with your logo -->
            <img src="https://recruitment4u.com/logo.png" alt="Recruitment 4U Logo" class="logo">
            <h1>New Contact Form Submission</h1>
        </div>
        
        <div class="content">
            <div class="details">
                <div class="detail-row">
                    <span class="label">Company:</span>
                    <span class="value">${company}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Name:</span>
                    <span class="value">${name}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Email:</span>
                    <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="detail-row">
                    <span class="label">Phone:</span>
                    <span class="value">${phone}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Country:</span>
                    <span class="value">${country}</span>
                </div>
            </div>
            
            <div class="message-box">
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 25px;">
                <a href="mailto:${email}" class="button">Reply to ${name}</a>
            </div>
        </div>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} Recruitment 4U. All rights reserved.</p>
            <p>
                <a href="https://recruitment4u.com" style="color: #0056b3; text-decoration: none;">Website</a> | 
                <a href="https://recruitment4u.com/privacy" style="color: #0056b3; text-decoration: none;">Privacy Policy</a>
            </p>
        </div>
    </div>
</body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    } else {
      console.error("Error sending email:", error);
    }
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
