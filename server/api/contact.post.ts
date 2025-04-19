import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'quangtuanhv@gmail.com',
    pass: 'dwfnkbmhtcardyfl'
  }
})

async function sendEmail(data: any) {
  const mailOptions = {
    from: 'quangtuanhv@gmail.com',
    to: 'khanhhuynh050895@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <h3>Contact Form Details:</h3>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Enquiry Purpose:</strong> ${data.target}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}
async function sendThankYouEmail(data: any) {
  const mailOptions = {
    from: 'quangtuanhv@gmail.com', 
    to: data.email,
    subject: 'Thank You for Contacting Us',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${data.fullName},</p>
        <p>Thank you for reaching out to us. We have received your inquiry and our team will review it shortly.</p>
        <p>Here is a summary of the information you provided:</p>
        <ul>
          <li>Company: ${data.company}</li>
          <li>Enquiry Purpose: ${data.target}</li>
          <li>Message: ${data.message}</li>
        </ul>
        <p>We will get back to you as soon as possible.</p>
        <p>Best regards,<br>The Aussie GR Team</p>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending thank you email:', error)
    return false
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    await Promise.all([
      sendEmail(body),
      sendThankYouEmail(body)
    ])
    return setResponseStatus(event, 200, 'succrs')
  } catch (error) {
    console.error('Error sending email:', error)
    return setResponseStatus(event, 500, 'error')
  }
})

