import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailFrom = process.env.EMAIL_FROM;
const emailTo = process.env.EMAIL_TO;

const leadSchema = z.object({
  company: z.string().min(1),
  cif: z.string().min(1),
  contactPerson: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  bondType: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  if (!emailFrom || !emailTo) {
    return NextResponse.json({ success: false, error: 'Email configuration is missing.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const parsedData = leadSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json({ success: false, error: 'Invalid form data.' }, { status: 400 });
    }

    const { company, cif, contactPerson, email, phone, bondType, message } = parsedData.data;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="color: #333;">Nueva Solicitud de Estudio desde Confía</h1>
        <p>Se ha recibido una nueva solicitud a través del formulario de contacto de la web.</p>
        <hr style="border: 0; border-top: 1px solid #eee;">
        <h2 style="color: #555;">Detalles de la Solicitud</h2>
        <ul style="list-style-type: none; padding: 0;">
          <li style="margin-bottom: 10px;"><strong>Empresa:</strong> ${company}</li>
          <li style="margin-bottom: 10px;"><strong>CIF/NIF:</strong> ${cif}</li>
          <li style="margin-bottom: 10px;"><strong>Persona de Contacto:</strong> ${contactPerson}</li>
          <li style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
          ${phone ? `<li style="margin-bottom: 10px;"><strong>Teléfono:</strong> ${phone}</li>` : ''}
          ${bondType ? `<li style="margin-bottom: 10px;"><strong>Tipo de Caución:</strong> ${bondType}</li>` : ''}
        </ul>
        <h3 style="color: #555;">Mensaje:</h3>
        <div style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
          <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <hr style="margin-top: 20px; border: 0; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #888;">Este correo fue enviado automáticamente desde el sitio web confiax.es.</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `Nueva solicitud de estudio: ${company}`,
      html: emailHtml,
      reply_to: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ success: false, error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
