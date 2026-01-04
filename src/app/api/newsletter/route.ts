import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // 1. Send confirmation email to subscriber
    const subscriberEmailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0891b2, #2563eb); padding: 30px; text-align: center; color: white; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; padding: 12px 30px; background: #0891b2; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌴 Welcome to CeyLanka Tours!</h1>
            </div>
            <div class="content">
              <h2>Thank You for Subscribing!</h2>
              <p>You've successfully joined our community of travel enthusiasts exploring beautiful Sri Lanka.</p>
              
              <p><strong>What to expect:</strong></p>
              <ul>
                <li>📧 Weekly travel guides and destination highlights</li>
                <li>🎁 Exclusive travel tips and insider recommendations</li>
                <li>🏖️ Special offers on tours and experiences</li>
                <li>📸 Beautiful Sri Lankan photography and stories</li>
              </ul>

              <p>Get ready to discover the pearl of the Indian Ocean!</p>
              
              <a href="https://ceylanka-tours.vercel.app" class="button">Explore Sri Lanka</a>
              
              <p style="margin-top: 30px; color: #666; font-size: 14px;">
                Not interested anymore? You can unsubscribe at any time by clicking 
                <a href="mailto:ceylankatoursinfo@gmail.com?subject=Unsubscribe">here</a>.
              </p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} CeyLanka Tours. All rights reserved.</p>
              <p>Experience the magic of Sri Lanka with us!</p>
            </div>
          </div>
        </body>
      </html>
    `

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: '🌴 Welcome to CeyLanka Tours Newsletter!',
      html: subscriberEmailContent,
    })

    // 2. Send notification to CeyLanka Tours about new subscriber
    const adminNotificationContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; }
            .header { background: #10b981; padding: 20px; text-align: center; color: white; border-radius: 8px; }
            .info { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #10b981; border-radius: 4px; }
            .badge { display: inline-block; background: #10b981; color: white; padding: 5px 10px; border-radius: 4px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎉 New Newsletter Subscriber!</h2>
            </div>
            <div class="info">
              <p><span class="badge">NEW SUBSCRIBER</span></p>
              <h3>Subscriber Details:</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subscribed On:</strong> ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short',
              })}</p>
              <p><strong>Source:</strong> Website Newsletter Form</p>
            </div>
            <p style="color: #666; font-size: 14px;">
              💡 <strong>Action Required:</strong> Consider adding this subscriber to your email marketing platform 
              (Mailchimp, Brevo, ConvertKit) for automated campaigns.
            </p>
          </div>
        </body>
      </html>
    `

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'ceylankatoursinfo@gmail.com',
      subject: '🎉 New Newsletter Subscriber - CeyLanka Tours',
      html: adminNotificationContent,
      replyTo: email,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed! Check your email for confirmation.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    )
  }
}
