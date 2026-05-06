import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // In production, send to your email service (Resend, SendGrid, etc.)
    console.log('Contact form submission:', { name, email, phone, message })

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
