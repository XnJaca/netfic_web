import { Resend } from 'resend';

export const prerender = false;

const TO_EMAIL = 'info@netfic.com';
// Sandbox de Resend: solo manda al email dueño de la cuenta hasta verificar dominio.
// Una vez verificado netfic.com en resend.com → DNS, cambiar a 'NetFic Web <hola@netfic.com>'.
const FROM_EMAIL = 'NetFic Web <onboarding@resend.dev>';

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[m]));
}

function jsonError(error, status) {
  return new Response(JSON.stringify({ ok: false, error }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST({ request }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('invalid_body', 400);
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const service = (body.service ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || !email || !message) return jsonError('missing_fields', 400);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return jsonError('invalid_email', 400);
  if (message.length > 5000) return jsonError('message_too_long', 400);

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) return jsonError('not_configured', 500);

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 580px; margin: 0 auto; color: #181816;">
      <div style="border-left: 4px solid #C2522A; padding: 0 0 0 18px;">
        <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; color: #7A7C77;">NetFic · Nuevo lead</p>
        <h1 style="margin: 6px 0 0; font-size: 28px; letter-spacing: -0.02em;">${escapeHtml(name)}</h1>
      </div>

      <table style="margin-top: 28px; width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 12px; background: #F8F6F1; font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; color: #7A7C77; width: 120px;">Email</td>
          <td style="padding: 10px 12px; background: #F8F6F1;"><a href="mailto:${escapeHtml(email)}" style="color: #181816;">${escapeHtml(email)}</a></td>
        </tr>
        ${phone ? `
        <tr>
          <td style="padding: 10px 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; color: #7A7C77;">Teléfono</td>
          <td style="padding: 10px 12px;"><a href="tel:${escapeHtml(phone)}" style="color: #181816;">${escapeHtml(phone)}</a></td>
        </tr>` : ''}
        ${service ? `
        <tr>
          <td style="padding: 10px 12px; background: #F8F6F1; font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; color: #7A7C77;">Servicio</td>
          <td style="padding: 10px 12px; background: #F8F6F1;">${escapeHtml(service)}</td>
        </tr>` : ''}
      </table>

      <div style="margin-top: 28px;">
        <p style="margin: 0 0 6px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; color: #7A7C77;">Mensaje</p>
        <div style="padding: 18px; background: #F8F6F1; border-radius: 8px; line-height: 1.55;">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
      </div>

      <p style="margin-top: 28px; font-size: 12px; color: #7A7C77;">Enviado desde el formulario de netfic.com</p>
    </div>
  `;

  const subject = `[NetFic] ${name}${service ? ` — ${service}` : ''}`;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    return jsonError('send_failed', 500);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
