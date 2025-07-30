# NetFic Solutions - Sitio Web Corporativo

Este es un sitio web corporativo completo para NetFic Solutions, desarrollado con Astro, TailwindCSS y AlpineJS. El sitio incluye múltiples secciones y páginas con diseño responsive.

![NetFic Solutions Preview](https://example.com/preview.jpg)

## 🚀 Características

- **Diseño Responsive**: Adaptado a cualquier tamaño de pantalla y dispositivo
- **Navegación Intuitiva**: Menú de navegación con soporte para dispositivos móviles
- **Secciones Principales**:
  - Página de inicio con Hero Section
  - Sección de Servicios con grid de tarjetas y páginas detalladas para cada servicio
  - Sección Quienes Somos con información corporativa
  - Carrusel de Proyectos con Alpine.js
  - Formulario de Contacto funcional
  - Sección de Testimonios de clientes
  - FAQs con Alpine.js para las preguntas más frecuentes
- **Páginas de Servicios Detalladas**: Información completa para cada servicio ofrecido
- **Optimizado para SEO**: Metadatos y estructura semántica
- **Alto Rendimiento**: Construido con Astro para una carga rápida

## 🧰 Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitario
- [Alpine.js](https://alpinejs.dev/) - Framework JavaScript minimalista
- Plugins de Tailwind para formularios y aspect-ratio

## 📁 Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.astro         # Componente "Quienes Somos"
│   │   ├── Contact.astro       # Componente de Formulario de Contacto
│   │   ├── FAQ.astro           # Componente de preguntas frecuentes
│   │   ├── Footer.astro        # Componente del pie de página
│   │   ├── header.astro        # Navbar principal responsive
│   │   ├── Projects.astro      # Carrusel de proyectos
│   │   ├── ServiceDetail.astro # Componente de detalle de servicio
│   │   ├── Services.astro      # Grid de servicios
│   │   └── Testimonials.astro  # Componente de testimonios de clientes
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal
│   ├── pages/
│   │   ├── api/
│   │   │   └── contact.js      # API endpoint para el formulario de contacto
│   │   ├── index.astro         # Página principal
│   │   ├── servicios.astro     # Página de servicios
│   │   ├── servicios/          # Páginas detalladas de servicios
│   │   │   ├── aires-acondicionados.astro
│   │   │   ├── cableado-estructurado.astro
│   │   │   ├── centrales-telefonicas.astro
│   │   │   ├── fibra-optica.astro
│   │   │   ├── instalaciones-electricas.astro
│   │   │   ├── redes-inalambricas.astro
│   │   │   ├── venta-equipos.astro
│   │   │   └── videovigilancia.astro
│   │   ├── quienes-somos.astro # Página "Quienes Somos"
│   │   └── contacto.astro      # Página de contacto
│   ├── scripts/
│   │   └── alpine.js           # Configuración de Alpine.js
│   └── styles/
│       └── global.css          # Estilos globales
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Instala las dependencias                          |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`      |
| `npm run build`           | Construye la versión de producción en `./dist/`   |
| `npm run preview`         | Vista previa local de la versión de producción    |

## 🚀 Despliegue

Este sitio está optimizado para ser desplegado en plataformas como Netlify, Vercel o cualquier hosting que soporte aplicaciones web estáticas.

## 💻 Desarrollo futuro

- Implementación de un blog corporativo
- Panel de administración para gestionar contenidos
- Optimización de rendimiento con carga perezosa de imágenes
- Integración con CRM para seguimiento de leads
