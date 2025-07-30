# NetFic Solutions - Sitio Web Corporativo

Sitio web corporativo profesional para NetFic Solutions, empresa especializada en soluciones tecnológicas integrales en Costa Rica. Desarrollado con tecnologías modernas como Astro, TailwindCSS y AlpineJS.

## 🏢 Acerca de NetFic Solutions

NetFic Solutions es una empresa costarricense especializada en:
- Redes Inalámbricas y Cableado Estructurado
- Videovigilancia CCTV y Sistemas de Seguridad
- Fibra Óptica e Instalaciones Eléctricas
- Aires Acondicionados y Climatización
- Venta de Equipos Tecnológicos

## 🚀 Características del Sitio

- **Diseño Responsive**: Completamente adaptado para móviles, tablets y desktop
- **Navegación Inteligente**: Navbar transparente que cambia a sólido al hacer scroll
- **Hero Section Moderno**: Con imagen de fondo personalizada y efectos visuales
- **Servicios Interactivos**: Grid de servicios con páginas detalladas individuales
- **Proyectos Filtrados**: Sistema de filtrado con modales y animaciones
- **Formulario de Contacto**: Integrado con EmailJS para envío directo de emails
- **SEO Optimizado**: Metadatos y estructura semántica correcta
- **Alto Rendimiento**: Sitio estático optimizado para carga rápida

## 🧰 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno para sitios estáticos
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **[AlpineJS](https://alpinejs.dev/)** - JavaScript reactivo ligero
- **[EmailJS](https://www.emailjs.com/)** - Servicio de envío de emails cliente-side
- **TypeScript** - Tipado estático para JavaScript

## 📁 Estructura del Proyecto

```text
/
├── public/                    # Archivos estáticos públicos
│   ├── favicon.svg
│   ├── bg-main.png           # Imagen de fondo principal
│   ├── netfic-logo-xl.svg    # Logo principal
│   └── [otras imágenes]      # Imágenes de servicios y proyectos
├── src/
│   ├── components/
│   │   ├── About.astro       # Sección "Quienes Somos"
│   │   ├── Contact.astro     # Formulario de contacto con EmailJS
│   │   ├── Footer.astro      # Pie de página con enlaces y contacto
│   │   ├── header.astro      # Navbar responsive con scroll effects
│   │   ├── Projects.astro    # Grid de proyectos con filtros y modales
│   │   └── Services.astro    # Grid de servicios
│   ├── layouts/
│   │   └── Layout.astro      # Layout base con configuración global
│   ├── pages/
│   │   ├── index.astro       # Página principal con hero section
│   │   ├── contacto.astro    # Página de contacto dedicada
│   │   ├── servicios.astro   # Página principal de servicios
│   │   └── servicios/        # Páginas detalladas por servicio
│   │       ├── aires-acondicionados.astro
│   │       ├── cableado-estructurado.astro
│   │       ├── fibra-optica.astro
│   │       ├── redes-inalambricas.astro
│   │       ├── videovigilancia.astro
│   │       └── venta-equipos.astro
│   └── layouts/
│       └── Layout.astro
└── package.json
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Comandos Disponibles

| Comando                   | Acción                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Instala las dependencias                          |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye la versión de producción en `./dist/`   |
| `npm run preview`         | Vista previa local de la versión de producción    |

### Desarrollo Local

1. Clona el repositorio
```bash
git clone [url-del-repositorio]
cd netfic_web
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 🚀 Despliegue en Producción

### Render (Recomendado para este proyecto)

**Configuración para Static Site:**
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

### Otras Plataformas

El sitio es compatible con cualquier plataforma que soporte sitios estáticos:
- Netlify
- Vercel  
- GitHub Pages
- Cloudflare Pages

## 📞 Configuración del Formulario de Contacto

El formulario utiliza EmailJS con la siguiente configuración:
- **Service ID:** `service_h3dqbeu`
- **Template ID:** `template_7grjxkf`
- **Public Key:** `LVq3js0LUNgcF7RfT`

### Template Variables
- `{{to_name}}` - Nombre del destinatario
- `{{first_name}}` - Nombre del cliente
- `{{last_name}}` - Apellido del cliente
- `{{email}}` - Email del cliente
- `{{phone}}` - Teléfono del cliente
- `{{service}}` - Servicio de interés
- `{{message}}` - Mensaje del cliente

## 🎨 Características de Diseño

### Navbar Inteligente
- Transparente en la parte superior
- Se vuelve sólido blanco al hacer scroll
- Cambia colores de texto automáticamente
- Menú móvil responsivo

### Hero Section
- Imagen de fondo personalizada (`bg-main.png`)
- Texto posicionado a la derecha
- Gradientes y efectos visuales modernos
- Estadísticas y CTAs prominentes

### Sistema de Proyectos
- Filtrado por categorías con AlpineJS
- Modales con detalles expandidos
- Animaciones suaves y responsive

## 📱 Información de Contacto

- **Ubicación:** San Ramón, Alajuela, Costa Rica
- **Teléfono:** +506 8508-2921
- **Email:** info@netfic.com
- **Horario:** Lun-Vie 9:00-18:00

## 🔧 Desarrollo Futuro

- [ ] Implementación de blog corporativo
- [ ] Panel de administración para contenido
- [ ] Optimización de imágenes con lazy loading
- [ ] Integración con CRM
- [ ] Analytics y métricas de conversión
- [ ] Modo oscuro/claro
- [ ] Multiidioma (Inglés/Español)

## 📄 Licencia

© 2024 NetFic Solutions. Todos los derechos reservados.