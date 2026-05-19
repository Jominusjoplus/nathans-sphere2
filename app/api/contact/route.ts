import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, interest, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // ── Plug in your email service here ──────────────────────
    // npm install resend
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@nathanssphere.com',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New ${interest} inquiry from ${name}`,
    //   text: `${name}\n${email}\n\n${message}`,
    // });
    // ─────────────────────────────────────────────────────────

    console.log('Inquiry received:', { name, email, interest });
    return NextResponse.json({ success: true });

  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}