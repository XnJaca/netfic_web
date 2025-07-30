// EmailJS maneja el envío de correos directamente desde el frontend
// Este endpoint ahora es opcional y solo se usa para logging/backup
export async function POST({ request }) {
  try {
    const data = await request.formData();

    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const subject = data.get('subject');
    const message = data.get('message');

    // Log para propósitos de debugging (opcional)
    console.log('Formulario recibido (backup):', { name, email, phone, subject, message });

    // Aquí podrías agregar lógica adicional como:
    // - Guardar en base de datos
    // - Validaciones del servidor
    // - Análisis de spam
    // - Notificaciones internas

    return new Response(JSON.stringify({
      success: true,
      message: 'Formulario procesado correctamente'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error al procesar el formulario:', error);

    return new Response(JSON.stringify({
      success: false,
      message: 'Error al procesar el formulario'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
