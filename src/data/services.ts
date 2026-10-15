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
  /** Título para <title>, con la búsqueda objetivo + Costa Rica. */
  seoTitle: string;
  /** Meta description (~150 caracteres). */
  seoDescription: string;
  /** H1 de la página; por defecto `name`. */
  h1?: string;
  faqs?: { q: string; a: string }[];
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
    seoTitle: "Instalación de redes Wi-Fi para empresas en Costa Rica",
    seoDescription:
      "Diseño e instalación de redes Wi-Fi empresariales en Costa Rica: site survey, access points enterprise, VLANs, roaming sin cortes y monitoreo centralizado.",
    h1: "Redes Wi-Fi para empresas",
    faqs: [
      {
        q: "¿Por qué no basta con un router y repetidores?",
        a: "Los repetidores reducen la velocidad a la mitad en cada salto y no permiten pasar de un punto a otro sin cortes. Una red con access points conectados por cable y gestionados desde una controladora mantiene la velocidad, reparte la carga entre equipos y permite administrar todo desde un solo lugar.",
      },
      {
        q: "¿Qué es un site survey?",
        a: "Es la medición en sitio de la señal, la interferencia y los materiales del edificio antes de instalar. Con esos datos se decide cuántos access points poner y dónde, en lugar de adivinar.",
      },
      {
        q: "¿Qué significa roaming sin cortes?",
        a: "Que un celular o laptop cambia de un access point a otro mientras la persona camina, sin que se caiga una llamada o una videollamada.",
      },
      {
        q: "¿Se puede separar la red de invitados de la red de la empresa?",
        a: "Sí. Con varios SSIDs y VLANs, los invitados navegan en una red aislada que no tiene acceso a computadoras, impresoras ni servidores internos.",
      },
    ],
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
    seoTitle: "Cableado estructurado Cat 6 y Cat 6A en Costa Rica",
    seoDescription:
      "Instalación de cableado estructurado Cat 6 y 6A certificado en Costa Rica: racks, patch panels, etiquetado y reporte de certificación por punto.",
    faqs: [
      {
        q: "¿Qué diferencia hay entre Cat 6 y Cat 6A?",
        a: "Cat 6 soporta 10 Gbps solo en tramos cortos (hasta unos 55 m); Cat 6A soporta 10 Gbps en los 100 m completos y tiene mejor protección contra interferencia. Para obra nueva o redes que van a crecer, Cat 6A es la opción más duradera.",
      },
      {
        q: "¿Qué significa que el cableado esté certificado?",
        a: "Que cada punto se prueba con un equipo certificador que mide pérdidas, diafonía y longitud contra la norma ANSI/TIA. El resultado es un reporte por punto que demuestra que el cable rinde lo que su categoría promete.",
      },
      {
        q: "¿Cuál es la distancia máxima de un cable de red?",
        a: "100 metros por segmento entre el switch y el equipo final. Para distancias mayores o enlaces entre edificios se usa fibra óptica.",
      },
      {
        q: "¿El mismo cableado sirve para cámaras y teléfonos IP?",
        a: "Sí. Un cableado estructurado bien diseñado transporta datos, voz y video, y con switches PoE también alimenta cámaras, teléfonos y access points.",
      },
    ],
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
    seoTitle: "Instalación de fibra óptica empresarial en Costa Rica",
    seoDescription:
      "Tendido, fusionado y certificación OTDR de fibra óptica en Costa Rica para enlaces entre edificios, backbone interno e ISPs locales.",
    h1: "Instalación de fibra óptica",
    faqs: [
      {
        q: "¿Es lo mismo que el internet de fibra de mi proveedor?",
        a: "No. El proveedor de internet lleva el servicio hasta su edificio. Nosotros instalamos la red de fibra privada: el backbone dentro del edificio, los enlaces entre edificios de un mismo campus o la red de distribución de un ISP local.",
      },
      {
        q: "¿Cuándo conviene fibra en lugar de cable UTP?",
        a: "Cuando el tramo supera los 100 m, cuando hay que unir edificios, cuando el cable pasa cerca de motores o líneas eléctricas que generan interferencia, o cuando se necesita capacidad para crecer a 10 Gbps o más.",
      },
      {
        q: "¿Fibra monomodo o multimodo?",
        a: "La multimodo se usa en distancias cortas, dentro de un edificio o un campus. La monomodo llega a varios kilómetros y es la estándar para enlaces largos y redes de ISP. La elección depende de la distancia y de los equipos en cada extremo.",
      },
      {
        q: "¿Qué es una prueba OTDR?",
        a: "Es una medición que recorre el hilo de fibra y registra la pérdida de cada empalme y conector, y la distancia a la que ocurre. Sirve para comprobar que la instalación quedó bien y para ubicar fallas en el futuro.",
      },
    ],
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
    seoTitle: "Instalación de cámaras de seguridad CCTV en Costa Rica",
    seoDescription:
      "Instalación y mantenimiento de cámaras de seguridad IP en Costa Rica: NVR con grabación 24/7, acceso remoto desde el celular y analítica de eventos.",
    h1: "Cámaras de seguridad CCTV",
    faqs: [
      {
        q: "¿Cámaras IP o analógicas?",
        a: "Las cámaras IP ofrecen mayor resolución, analítica de video y se conectan por el mismo cableado de red, que además las alimenta con PoE. Los sistemas analógicos HD siguen siendo útiles para aprovechar un cableado coaxial existente.",
      },
      {
        q: "¿Puedo ver las cámaras desde el celular?",
        a: "Sí. El sistema se configura con acceso remoto cifrado desde una app móvil, para ver en vivo, revisar grabaciones y recibir notificaciones de eventos.",
      },
      {
        q: "¿Cuántos días de grabación guarda el sistema?",
        a: "Depende de la cantidad de cámaras, la resolución, si graba continuo o por movimiento y el tamaño del disco del NVR. Se dimensiona en la visita técnica según cuántos días necesita conservar.",
      },
      {
        q: "¿Qué es PoE y por qué importa?",
        a: "Power over Ethernet: el mismo cable de red lleva datos y energía a la cámara. Evita poner un tomacorriente en cada punto y permite respaldar todas las cámaras con una sola UPS en el rack.",
      },
    ],
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
    seoTitle: "Centrales telefónicas IP para empresas en Costa Rica",
    seoDescription:
      "Instalación de centrales telefónicas IP y PBX virtuales en Costa Rica: troncales SIP, IVR, colas, grabación de llamadas y extensiones en el celular.",
    faqs: [
      {
        q: "¿Qué diferencia hay entre una central IP y una analógica?",
        a: "La central analógica usa una línea física por llamada y cableado telefónico dedicado. La central IP usa la red de datos, permite extensiones en el celular o fuera de la oficina, menús IVR, colas, grabación y reportes, y crece agregando extensiones por software.",
      },
      {
        q: "¿Qué es una troncal SIP?",
        a: "Es una línea telefónica que llega por internet en lugar de por cable de cobre. Permite varias llamadas simultáneas sobre la misma conexión y suele reducir el costo de las llamadas.",
      },
      {
        q: "¿Tengo que cambiar todos los teléfonos?",
        a: "No necesariamente. Con gateways FXS o adaptadores ATA, los teléfonos analógicos existentes pueden conectarse a la central IP y reemplazarse de forma gradual.",
      },
      {
        q: "¿Central física o PBX virtual?",
        a: "Una central física queda instalada en su oficina; una PBX virtual corre en la nube y no requiere equipo en sitio. La decisión depende de la cantidad de extensiones, la calidad del internet y si el equipo trabaja en una o varias sedes.",
      },
    ],
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
    seoTitle: "Instalaciones eléctricas residenciales y comerciales en Costa Rica",
    seoDescription:
      "Instalaciones eléctricas en Costa Rica: tableros, puesta a tierra, UPS y respaldo para equipos críticos, iluminación LED y planos certificados.",
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
    seoTitle: "Instalación y mantenimiento de aire acondicionado en Costa Rica",
    seoDescription:
      "Venta, instalación, reparación y mantenimiento de aire acondicionado mini split, multi split y central para hogares y empresas en Costa Rica.",
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
    seoTitle: "Venta de equipos de redes, CCTV y telefonía IP en Costa Rica",
    seoDescription:
      "Venta de switches, access points, cámaras IP, NVRs, teléfonos IP, UPS y accesorios de fibra óptica en Costa Rica, con garantía y asesoría técnica.",
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

/** JSON-LD de Service (+ FAQPage si hay preguntas) para una página de servicio. */
export function serviceJsonLd(service: Service, site: URL): Record<string, unknown>[] {
  const url = new URL(`/servicios/${service.slug}/`, site).toString();
  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.h1 ?? service.name,
      serviceType: service.name,
      description: service.intro,
      url,
      provider: { "@id": new URL("/#business", site).toString() },
      areaServed: { "@type": "Country", name: "Costa Rica" },
    },
  ];
  if (service.faqs?.length) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }
  return schema;
}
