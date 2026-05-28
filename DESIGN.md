# NetFic Solutions — DESIGN tokens

## Dirección
**Infrastructure-as-Craft.** Contratista premium, craftsman tech. Calidez seria. Off-white + ink + un solo acento terracotta. Sin gradientes, sin glass, sin cards repetitivas.

## Dials (taste-skill)
- `DESIGN_VARIANCE: 7` — asimétrico con momentos editoriales
- `MOTION_INTENSITY: 5` — intencional, sin GSAP pesado
- `VISUAL_DENSITY: 4` — respira pero tiene contenido real

## Paleta (OKLCH-aware, tintado a la marca)
```
--paper      #F8F6F1   (background dominante)
--paper-dim  #EFEBE2   (separadores, fondos secundarios)
--ink        #181816   (texto primario)
--ink-soft   #3A3A36   (texto secundario)
--slate      #6F7268   (texto terciario, metadata)
--rust       #C2522A   (acento ÚNICO; CTAs, highlights, números)
--rust-deep  #9C3F1F   (hover, focus)
--line       #DCD7CB   (bordes finos)
```

Reglas de color:
- `rust` ocupa ≤10% de cualquier vista (Restrained color strategy).
- Cero `#000` y `#fff` puros — siempre tintados al hue paper.
- Tema único: light. No dark mode en esta versión.

## Tipografía
```
Display:  Cabinet Grotesk    medium 500 / bold 700
Body:     Satoshi            regular 400 / medium 500 / bold 700
Numbers:  Satoshi + tabular-nums
```

Self-hosting vía Fontshare CDN (no Google Fonts link). Inter prohibido como default.

Escalas:
- Display XL: `clamp(3rem, 7vw, 5.5rem)`  · tracking-tighter (-0.03em) · leading-[0.95]
- Display L:  `clamp(2.25rem, 4.5vw, 3.5rem)` · tracking-tighter (-0.025em)
- H2:         `clamp(1.75rem, 3vw, 2.25rem)` · tracking-tight (-0.02em)
- Body lg:    `1.0625rem` · leading-relaxed · max-w 65ch
- Body:       `0.9375rem` · leading-relaxed
- Eyebrow:    `0.7rem` · uppercase · tracking-[0.18em] — máx 1 cada 3 secciones

## Layout
- Container: `max-w-[1320px] mx-auto px-6 md:px-10`
- Asimetría: hero 60/40, secciones varias (no zigzag más de 2 seguidas)
- Cards prohibidas como default. Agrupar con `border-t` o negative space.
- Bordes radius: 0 en hero/secciones grandes, 6-8px en inputs/buttons.

## Motion
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)` (strong ease-out)
- Duraciones: 180-280ms para UI; 400-600ms para reveals
- Scroll-reveal con `IntersectionObserver` (sin GSAP)
- Botones: `transform: scale(0.97)` en :active

## Imagen
- Fotos REALES de instalaciones (`about_1.jpeg`, `banner_home.png`, etc.)
- Cero stock photo de "team in suit pointing at laptop"
- Cero ilustraciones SVG decorativas hechas a mano

## Componentes
- Botón primario: `bg-rust text-paper` rect 6px, padding generoso
- Botón secundario: `border border-ink text-ink` mismo shape
- Inputs: borde `--line`, focus ring color `--rust`
- Eyebrows: pequeños, máx 1 cada 3 secciones (taste-skill rule)
