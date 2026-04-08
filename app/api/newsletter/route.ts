import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3';

export async function POST(request: NextRequest) {
  try {
    const { email, language } = await request.json();

    if (!email || !language) {
      return NextResponse.json(
        { error: 'Email and language are required' },
        { status: 400 }
      );
    }

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create or update contact in Brevo
    const contactData = {
      email,
      attributes: {
        LANGUAGE: language,
        SOURCE: 'graftscope-blog'
      },
      listIds: [2], // GraftScope Blog list ID - you may need to create this list in Brevo and get the correct ID
      updateEnabled: true
    };

    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: response.status }
      );
    }

    // Send notification email after successful contact creation
    const currentDateTime = new Date().toLocaleString('tr-TR', {
      timeZone: 'Europe/Istanbul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const emailData = {
      sender: {
        name: 'GraftScope Insights',
        email: 'contact@graftscope.com'
      },
      to: [{
        email: 'contact@graftscope.com',
        name: 'GraftScope Team'
      }],
      subject: 'Yeni Newsletter Abonesi - GraftScope Insights',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a6b4a; margin-bottom: 20px;">Yeni Newsletter Abonesi</h2>
          <p style="margin-bottom: 15px;">Yeni bir abone kaydoldu.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Dil:</strong> ${language}</p>
            <p style="margin: 5px 0;"><strong>Tarih:</strong> ${currentDateTime}</p>
          </div>
          
          <p style="margin-top: 30px; font-size: 14px; color: #666;">
            GraftScope Insights
          </p>
        </div>
      `,
      textContent: `Yeni bir abone kaydoldu.

Email: ${email}
Dil: ${language}
Tarih: ${currentDateTime}

GraftScope Insights`
    };

    const emailResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(emailData),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.json().catch(() => ({}));
      console.error('Failed to send notification email:', emailError);
      // Don't fail the whole operation if email fails, just log it
      console.log('Contact was added successfully but notification email failed');
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
