import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, tipoEmpresa, necesidad, mensaje } = body;

    // Email to The Burn team
    await resend.emails.send({
      from: 'The Burn Web <noreply@theburn.cl>',
      to: ['marketing@theburn.cl'],
      subject: `Nuevo contacto desde theburn.cl — ${tipoEmpresa}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F1EA; padding: 32px; border-radius: 16px;">
          
          <div style="background: #0A0A0A; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <p style="color: #FF4500; font-size: 12px; letter-spacing: 2px; margin: 0 0 8px 0;">■ NUEVO CONTACTO · THEBURN.CL</p>
            <h1 style="color: #FFFFFF; font-size: 24px; margin: 0;">Nuevo lead desde el sitio web</h1>
          </div>

          <div style="background: #FFFFFF; padding: 24px; border-radius: 12px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #F5F1EA;">
                <td style="padding: 12px 0; color: #938B82; font-size: 12px; letter-spacing: 1px; width: 40%;">NOMBRE</td>
                <td style="padding: 12px 0; color: #0A0A0A; font-weight: 600;">${nombre}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F5F1EA;">
                <td style="padding: 12px 0; color: #938B82; font-size: 12px; letter-spacing: 1px;">EMPRESA</td>
                <td style="padding: 12px 0; color: #0A0A0A; font-weight: 600;">${empresa}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F5F1EA;">
                <td style="padding: 12px 0; color: #938B82; font-size: 12px; letter-spacing: 1px;">EMAIL</td>
                <td style="padding: 12px 0; color: #FF4500; font-weight: 600;">${email}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F5F1EA;">
                <td style="padding: 12px 0; color: #938B82; font-size: 12px; letter-spacing: 1px;">TELÉFONO</td>
                <td style="padding: 12px 0; color: #0A0A0A;">${telefono || 'No indicado'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F5F1EA;">
                <td style="padding: 12px 0; color: #938B82; font-size: 12px; letter-spacing: 1px;">TIPO EMPRESA</td>
                <td style="padding: 12px 0; color: #0A0A0A;">${tipoEmpresa || 'No indicado'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F5F1EA;">
                <td style="padding: 12px 0; color: #938B82; font-size: 12px; letter-spacing: 1px;">NECESIDAD</td>
                <td style="padding: 12px 0; color: #0A0A0A;">${necesidad || 'No indicado'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #938B82; font-size: 12px; letter-spacing: 1px;">MENSAJE</td>
                <td style="padding: 12px 0; color: #0A0A0A;">${mensaje || 'Sin mensaje adicional'}</td>
              </tr>
            </table>
          </div>

          <div style="background: #FF4500; padding: 16px 24px; border-radius: 100px; text-align: center;">
            <a href="mailto:${email}" style="color: #0A0A0A; font-weight: 700; text-decoration: none; font-size: 14px;">
              Responder a ${nombre} →
            </a>
          </div>

          <p style="color: #938B82; font-size: 11px; text-align: center; margin-top: 24px; letter-spacing: 1px;">
            THEBURN.CL · SANTIAGO, CHILE
          </p>
        </div>
      `,
    });

    // Auto-reply to the person who submitted
    await resend.emails.send({
      from: 'Jordan Wells · The Burn <jordan@theburn.cl>',
      to: [email],
      subject: 'Recibimos tu mensaje — The Burn',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F5F1EA; padding: 32px; border-radius: 16px;">
          
          <div style="background: #0A0A0A; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <p style="color: #FF4500; font-size: 12px; letter-spacing: 2px; margin: 0 0 8px 0;">■ THE BURN · CONSULTORÍA COMERCIAL & MARKETING</p>
            <h1 style="color: #FFFFFF; font-size: 28px; margin: 0; line-height: 1.1;">RECIBIMOS TU MENSAJE.</h1>
          </div>

          <div style="background: #FFFFFF; padding: 24px; border-radius: 12px; margin-bottom: 16px;">
            <p style="color: #0A0A0A; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
              Hola <strong>${nombre}</strong>,
            </p>
            <p style="color: #0A0A0A; font-size: 16px; line-height: 1.6; margin: 0 0 16px 0;">
              Recibimos tu solicitud de <strong>${empresa}</strong>. Te contactamos en menos de 24 horas hábiles.
            </p>
            <p style="color: #938B82; font-size: 14px; line-height: 1.6; margin: 0;">
              Mientras tanto, si tienes urgencia puedes escribirnos directamente por WhatsApp al +56 9 3650 4772.
            </p>
          </div>

          <div style="background: #0A0A0A; padding: 20px 24px; border-radius: 12px; margin-bottom: 16px;">
            <p style="color: #938B82; font-size: 11px; letter-spacing: 2px; margin: 0 0 4px 0;">MENOS BLA, MÁS MARKETING.</p>
            <p style="color: #FFFFFF; font-size: 14px; margin: 0;">
              Jordan Wells · The Burn<br>
              <span style="color: #938B82;">jordan@theburn.cl · theburn.cl</span>
            </p>
          </div>

          <p style="color: #938B82; font-size: 11px; text-align: center; margin: 0; letter-spacing: 1px;">
            © 2026 THE BURN SpA · SANTIAGO, CHILE
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
