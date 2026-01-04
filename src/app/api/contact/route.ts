import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, country, travelDates, groupSize, interests, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content
    const emailContent = `
New Contact Form Submission from Ceylanka Tours Website

Personal Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Country: ${country || 'Not provided'}

Travel Details:
- Preferred Travel Dates: ${travelDates || 'Not specified'}
- Group Size: ${groupSize || 'Not specified'}
- Interests: ${interests || 'Not specified'}

Message:
${message}

---
This email was sent from the Ceylanka Tours contact form.
Reply to: ${email}
`

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'ceylankatoursinfo@gmail.com',
      subject: `New Travel Inquiry from ${name}`,
      text: emailContent,
      replyTo: email,
    })

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
