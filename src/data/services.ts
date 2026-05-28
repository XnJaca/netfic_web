export interface Service {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  intro: string;
  image: string;
  features: string[];
  benefits: string[];
  related: { slug: string; name: string; teaser: string }[];
  isNew?: boolean;
}

const byNumber: Record<string, string> = {
  "redes-inalambricas": "01",
  "cableado-estructurado": "02",
  "fibra-optica": "03",
  videovigilancia: "04",
  "centrales-telefonicas": "05",
  "instalaciones-electricas": "06",
  "aires-acondicionados": "07",
  "venta-equipos": "08",
};

export const services: Record<string, Service> = {
  "redes-inalambricas": {
    slug: "redes-inalambricas",
    number: byNumber["redes-inalambricas"],
    name: "Redes Wi-Fi enterprise",
    tagline: "Conectividad sin puntos muertos para hogar o negocio.",
    intro:
      "Diseñamos, instalamos y configuramos redes Wi-Fi de alto rendimiento. Cobertura medida al sitio, equipo enterprise, segmentación de tráfico y monitoreo centralizado. Adecuado para oficinas, hotelería, espacios grandes y casas con paredes gruesas.",
    image: "/redes_inalambricas.png",
    features: [
      "Site survey y planificación de cobertura para optimizar la señal",
      "Instalación de puntos de acceso enterprise de última generación",
      "Configuración de redes con múltiples SSIDs y VLANs",
      "Sistema de gestión centralizada para administración remota",
      "Seguridad WPA3, segmentación y firewall de red",
      "Roaming entre APs sin cortes en llamadas o video",
    ],
    benefits: [
      "Cobertura completa sin puntos muertos",
      "Velocidad y estabilidad sostenida con muchos dispositivos",
      "Seguridad reforzada contra accesos no autorizados",
      "Escalable: agregar APs sin rediseñar la red",
      "Monitoreo y diagnóstico remoto incluidos",
      "Documentación y mapa de cobertura entregados al cierre",
    ],
    related: [
      { slug: "cableado-estructurado", name: "Cableado estructurado", teaser: "El backbone físico de tu Wi-Fi: Cat 6/6A certificado." },
      { slug: "fibra-optica", name: "Fibra óptica", teaser: "Para enlace entre edificios o backbone interno." },
      { slug: "venta-equipos", name: "Venta de equipos", teaser: "APs, switches y controladoras enterprise." },
    ],
  },
  "cableado-estructurado": {
    slug: "cableado-estructurado",
    number: byNumber["cableado-estructurado"],
    name: "Cableado estructurado",
    tagline: "El backbone físico hecho como se debe.",
    intro:
      "Diseño e instalación de sistemas de cableado estructurado para datos, voz y CCTV. Categoría 6 y 6A, certificado por punto, etiquetado y documentado. La base que sostiene todo lo demás.",
    image: "/cableado_estructurado.png",
    features: [
      "Categoría 6 y 6A certificado para velocidades 10G",
      "Diseño y armado de racks con organización profesional",
      "Etiquetado de puntos y patch panels",
      "Pruebas de certificación por punto con reporte",
      "Canalización interna y exterior según norma",
      "Integración con redes de datos, voz y CCTV",
    ],
    benefits: [
      "Velocidad sostenida sin pérdidas de paquetes",
      "Mantenimiento simple gracias al etiquetado",
      "Base sólida para crecimiento futuro",
      "Cumplimiento de normas ANSI/TIA",
      "Reportes de certificación entregados",
      "Garantía de instalación documentada",
    ],
    related: [
      { slug: "redes-inalambricas", name: "Redes Wi-Fi enterprise", teaser: "El complemento natural — Wi-Fi sobre tu backbone." },
      { slug: "fibra-optica", name: "Fibra óptica", teaser: "Para tramos largos o backbone entre edificios." },
      { slug: "centrales-telefonicas", name: "Centrales IP", teaser: "Aprovechá el mismo cableado para voz." },
    ],
  },
  "fibra-optica": {
    slug: "fibra-optica",
    number: byNumber["fibra-optica"],
    name: "Fibra óptica",
    tagline: "Velocidad y estabilidad a distancia.",
    intro:
      "Tendido, fusionado y mantenimiento de redes de fibra óptica para enlace entre edificios, backbone interno o ISP local. Pruebas OTDR y fichas técnicas al cierre.",
    image: "/fibra_optica.png",
    features: [
      "Tendido aéreo y subterráneo según el proyecto",
      "Fusionado certificado con máquina calibrada",
      "Pruebas OTDR de pérdida punto a punto",
      "Cajas de empalme y distribución NAP",
      "Conectorización SC, LC, FC según necesidad",
      "Documentación de mediciones por hilo",
    ],
    benefits: [
      "Velocidades de gigabit y más sin degradación",
      "Inmunidad a interferencia electromagnética",
      "Distancias largas sin repetidores",
      "Vida útil de décadas con mantenimiento mínimo",
      "Base lista para crecer en ancho de banda",
      "Soporte y diagnóstico continuo",
    ],
    related: [
      { slug: "cableado-estructurado", name: "Cableado estructurado", teaser: "Para los tramos de cobre dentro del edificio." },
      { slug: "redes-inalambricas", name: "Redes Wi-Fi enterprise", teaser: "Cobertura inalámbrica sobre tu fibra." },
      { slug: "venta-equipos", name: "Venta de equipos", teaser: "Transceivers SFP, switches con uplink de fibra." },
    ],
  },
  videovigilancia: {
    slug: "videovigilancia",
    number: byNumber["videovigilancia"],
    name: "Videovigilancia CCTV",
    tagline: "Cámaras IP con acceso remoto y grabación híbrida.",
    intro:
      "Instalación y mantenimiento de sistemas de cámaras de seguridad con tecnología IP de última generación. NVR con grabación local + nube, acceso remoto desde móvil y analítica de eventos.",
    image: "/cctv1.png",
    features: [
      "Cámaras IP 4MP/8MP con visión nocturna",
      "NVR con disco redundante y grabación 24/7",
      "Acceso remoto vía app móvil con cifrado",
      "Analítica: detección de movimiento, conteo, zonas",
      "Integración con redes existentes y centrales de monitoreo",
      "Backup en nube opcional para eventos críticos",
    ],
    benefits: [
      "Vigilancia continua sin puntos ciegos",
      "Acceso al sistema desde cualquier lugar",
      "Calidad de imagen suficiente para identificación",
      "Notificaciones en tiempo real al móvil",
      "Cumplimiento con normativa de privacidad",
      "Mantenimiento preventivo incluido",
    ],
    related: [
      { slug: "cableado-estructurado", name: "Cableado estructurado", teaser: "PoE+ para alimentar las cámaras desde el switch." },
      { slug: "centrales-telefonicas", name: "Centrales IP", teaser: "Integración de portero IP con la central." },
      { slug: "venta-equipos", name: "Venta de equipos", teaser: "Cámaras, NVRs y switches PoE con garantía." },
    ],
  },
  "centrales-telefonicas": {
    slug: "centrales-telefonicas",
    number: byNumber["centrales-telefonicas"],
    name: "Centrales telefónicas IP",
    tagline: "VoIP moderno, integrado al resto de la red.",
    intro:
      "Instalación y mantenimiento de centrales telefónicas IP y analógicas. Troncales SIP, integración con CRM, reportes de llamadas y soporte continuo. Para empresas que dejan atrás la telefonía analógica.",
    image: "/switch_red.png",
    features: [
      "Centrales VoIP en hardware o software (PBX virtual)",
      "Troncales SIP con proveedores locales o internacionales",
      "Integración con CRM y sistemas de ticketing",
      "IVR multinivel, colas, grabación de llamadas",
      "Apps móviles para extensiones remotas",
      "Reportes de tráfico y desempeño",
    ],
    benefits: [
      "Reducción de costos en llamadas internas y externas",
      "Movilidad: tu extensión donde estés",
      "Escalable sin reinstalar todo",
      "Reportes que ayudan a operar mejor",
      "Mantenimiento y soporte continuo",
      "Compatibilidad con teléfonos IP de varias marcas",
    ],
    related: [
      { slug: "cableado-estructurado", name: "Cableado estructurado", teaser: "Cableado de datos que también alimenta los IPs." },
      { slug: "redes-inalambricas", name: "Redes Wi-Fi enterprise", teaser: "Para que las apps SIP funcionen bien por Wi-Fi." },
      { slug: "venta-equipos", name: "Venta de equipos", teaser: "Teléfonos IP, gateways FXO/FXS, ATAs." },
    ],
  },
  "instalaciones-electricas": {
    slug: "instalaciones-electricas",
    number: byNumber["instalaciones-electricas"],
    name: "Instalaciones eléctricas",
    tagline: "Residencial y comercial, planos certificados.",
    intro:
      "Servicios completos de instalación eléctrica residencial y comercial con altos estándares de calidad y seguridad. Tableros, UPS, puesta a tierra, iluminación y proyectos completos con planos certificados.",
    image: "/ups.png",
    features: [
      "Tableros principales y subtableros",
      "Puesta a tierra con medición de resistividad",
      "UPS y respaldo eléctrico para equipos críticos",
      "Iluminación LED interna y exterior",
      "Tomas dedicadas para equipo sensible",
      "Planos eléctricos certificados",
    ],
    benefits: [
      "Instalaciones seguras según código eléctrico",
      "Reducción de fallas eléctricas y consumo",
      "Respaldo durante apagones para equipos clave",
      "Documentación de planos para mantenimiento futuro",
      "Cumplimiento con normativa nacional",
      "Mantenimiento preventivo incluido",
    ],
    related: [
      { slug: "aires-acondicionados", name: "Aires acondicionados", teaser: "Necesitan circuito dedicado bien dimensionado." },
      { slug: "venta-equipos", name: "Venta de equipos", teaser: "UPS, tableros, breakers de marcas serias." },
      { slug: "videovigilancia", name: "Videovigilancia CCTV", teaser: "Alimentación PoE+ y respaldo para el NVR." },
    ],
  },
  "aires-acondicionados": {
    slug: "aires-acondicionados",
    number: byNumber["aires-acondicionados"],
    name: "Aires acondicionados",
    tagline: "Venta, instalación y mantenimiento.",
    intro:
      "Venta, instalación, reparación y mantenimiento de sistemas de aire acondicionado para hogares y empresas. Mini split, multi split y central. Técnicos certificados y garantía extendida.",
    image: "/aire_acondicionado.png",
    isNew: true,
    features: [
      "Mini split residencial inverter",
      "Multi split para múltiples ambientes",
      "Sistemas centrales para oficinas y comercios",
      "Mantenimiento preventivo trimestral o semestral",
      "Recarga de gas y limpieza profunda",
      "Reparación de tarjetas, compresores y ventiladores",
    ],
    benefits: [
      "Eficiencia energética con tecnología inverter",
      "Garantía oficial del fabricante",
      "Mantenimiento que extiende la vida útil",
      "Diagnóstico rápido en caso de falla",
      "Asesoría para dimensionar el equipo correcto",
      "Instalación con circuito eléctrico adecuado",
    ],
    related: [
      { slug: "instalaciones-electricas", name: "Instalaciones eléctricas", teaser: "Circuito dedicado y breaker correcto para cada equipo." },
      { slug: "venta-equipos", name: "Venta de equipos", teaser: "Equipos de marcas con respaldo regional." },
      { slug: "cableado-estructurado", name: "Cableado estructurado", teaser: "Coordinación con cableado en obra nueva." },
    ],
  },
  "venta-equipos": {
    slug: "venta-equipos",
    number: byNumber["venta-equipos"],
    name: "Venta de equipos",
    tagline: "Distribución con garantía y soporte directo.",
    intro:
      "Distribución de equipos y accesorios de telecomunicaciones, seguridad y redes. Marcas con respaldo regional y garantía. Para clientes que ya tienen quien instale o que solo necesitan el suministro.",
    image: "/access_point.png",
    features: [
      "Switches, routers, APs enterprise",
      "Cámaras IP, NVRs y accesorios CCTV",
      "Teléfonos IP, gateways y ATAs",
      "UPS, tableros y componentes eléctricos",
      "Fibra óptica, conectores, transceivers SFP",
      "Herramienta y accesorios para instalación",
    ],
    benefits: [
      "Marcas con respaldo regional y garantía oficial",
      "Asesoría de selección sin compromiso",
      "Despacho rápido en Costa Rica",
      "Soporte técnico directo en caso de duda",
      "Precios competitivos por compra mayorista",
      "Compatibilidad verificada antes de despacho",
    ],
    related: [
      { slug: "redes-inalambricas", name: "Redes Wi-Fi enterprise", teaser: "Compra el equipo y nosotros lo instalamos." },
      { slug: "videovigilancia", name: "Videovigilancia CCTV", teaser: "Sistema completo incluyendo cámaras." },
      { slug: "cableado-estructurado", name: "Cableado estructurado", teaser: "Coordinación de equipo + instalación." },
    ],
  },
};
