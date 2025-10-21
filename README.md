# Portfolio Astro

Un portfolio personal moderno y multilingüe construido con Astro, React, Tailwind CSS y Shadcn/ui.

## 🚀 Características

- ✅ **Multilingüe** - Soporte para español e inglés
- ✅ **Modo oscuro/claro** - Tema personalizable con 
persistencia
- ✅ **Responsive** - Diseño adaptable a todos los 
dispositivos
- ✅ **Optimizado para SEO** - Metadatos y estructura 
optimizada
- ✅ **Colecciones de contenido** - Gestión de 
proyectos, experiencias, habilidades y más
- ✅ **Transiciones de página** - Animaciones suaves 
entre páginas
- ✅ **Notificaciones con Sonner** - Sistema de 
notificaciones elegante
- ✅ **Blog integrado** - Soporte para artículos en 
formato MDX

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web para 
sitios estáticos
- [React](https://react.dev/) - Biblioteca para 
interfaces de usuario
- [Tailwind CSS](https://tailwindcss.com/) - 
Framework CSS utilitario
- [TypeScript](https://www.typescriptlang.org/) - 
JavaScript con tipado estático
- [GSAP](https://greensock.com/gsap/) - Animaciones 
avanzadas
- [Sonner](https://sonner.emilkowal.ski/) - Sistema 
de notificaciones toast
- [MDX](https://mdxjs.com/) - Markdown con JSX para 
contenido enriquecido

## 📦 Estructura del proyecto

```
/
├── public/                 # Archivos estáticos
│   ├── fonts/              # Fuentes personalizadas
│   └── pdf/                # Archivos PDF (currículum)
├── src/
│   ├── assets/             # Imágenes y recursos
│   ├── components/         # Componentes reutilizables
│   │   ├── common/         # Componentes comunes
│   │   ├── sections/       # Secciones de página
│   │   └── ui/             # Componentes de interfaz
│   ├── content/            # Contenido estructurado
│   │   ├── blog/           # Artículos del blog (archivos MDX)
│   │   ├── certifications/ # Certificaciones (archivos JSON)
│   │   ├── experiences/    # Experiencia laboral (archivos JSON)
│   │   ├── projects/       # Proyectos (archivos MDX)
│   │   ├── skills/         # Habilidades (archivos JSON)
│   │   └── university/     # Educación (archivos JSON)
│   ├── i18n/               # Traducciones
│   ├── icons/              # Iconos SVG
│   ├── layouts/            # Plantillas de página
│   ├── lib/                # Utilidades y constantes
│   │   ├── const.ts        # Enlaces y datos constantes
│   │   └── utils.ts        # Funciones de utilidad
│   ├── pages/              # Páginas del sitio
│   ├── scripts/            # Scripts del cliente
│   └── styles/             # Estilos CSS
│   └── content.config.ts   # Configuración de contenido
└── package.json            # Dependencias y scripts
```


## 🧩 Gestión de contenido

El proyecto utiliza colecciones de contenido de Astro para gestionar la información. Cada tipo de contenido se define en `src/content.config.ts` y se almacena en la carpeta `src/content/`.

### 📄 Tipos de archivos de contenido

- **JSON**: Utilizado para datos estructurados simples (skills, experiences, certifications, university)
- **MDX**: Utilizado para contenido enriquecido con formato y componentes (blog, projects)

### ⚙️ Enlaces y constantes globales

El archivo `src/lib/const.ts` contiene las constantes principales utilizadas en todo el proyecto:

```typescript
export const linkedin = "https://www.linkedin.com/in/agustin-castets"
export const github = "https://github.com/cuter97"
export const email = "aguscastets@gmail.com"
export const drive = "https://drive.google.com/drive/u/0/folders/1hXpdzjBKPjZKnH9BEgujEksY69NROcLn"
```

Estas constantes se utilizan para mantener centralizados los enlaces y datos importantes que se usan en múltiples lugares del proyecto.

### ⚠️ Importante: Correspondencia de nombres de iconos

Para que los iconos se muestren correctamente, **debe existir una correspondencia exacta** entre:
1. El nombre del archivo SVG en la carpeta `src/icons/`
2. El valor del campo `icon` en los archivos de skills (`src/content/skills/`)
3. Los valores en el array `tags` de los proyectos (`src/content/projects/`)

Por ejemplo, si tienes un icono `react.svg` en la carpeta de iconos:
- En un archivo de skill, debes usar `"icon": "react"`
- En los tags de un proyecto, debes incluir `"tags": ["react", ...]`

Si los nombres no coinciden exactamente, los iconos no se mostrarán correctamente.

### Estructura de contenido

#### Proyectos (`projects` - archivos MDX)
```mdx
---
title: "Nombre del proyecto"
description: "Descripción del proyecto"
image: "/ruta/a/imagen.webp"
tags: ["react", "typescript", "tailwindcss"]
links:
  github: "https://github.com/usuario/proyecto"
  demo: "https://demo.proyecto.com"
lang: "es"
---

# Detalles del proyecto

Aquí puedes escribir una descripción detallada del proyecto utilizando Markdown con soporte para componentes JSX.

## Características

- Característica 1
- Característica 2

<MiComponente prop="valor" />
```

#### Blog (`blog` - archivos MDX)
```mdx
---
title: "Título del artículo"
description: "Descripción breve del artículo"
publishDate: "2023-06-15"
image: "/ruta/a/imagen.webp"
tags: ["desarrollo", "web", "react"]
lang: "es"
---

# Contenido del artículo

Aquí puedes escribir el contenido completo del artículo utilizando Markdown con soporte para componentes JSX.

## Sección 1

Texto de la sección...

<MiComponente prop="valor" />
```

#### Experiencias (`experiences` - archivos JSON)
```json
{
  "title": "Cargo",
  "company": "Nombre de la empresa",
  "location": "Ubicación",
  "dates": {
    "start": "Jul 2022",
    "end": "Present"
  },
  "summary": "Resumen de la posición",
  "responsibilities": [
    "Responsabilidad 1",
    "Responsabilidad 2"
  ],
  "achievements": [
    "Logro 1",
    "Logro 2"
  ],
  "lang": "es"
}
```

#### Habilidades (`skills` - archivos JSON)
```json
{
  "skill": "Nombre de la habilidad",
  "description": "Descripción de la habilidad",
  "release": "Información adicional",
  "icon": "nombre-del-icono",
  "feed": true, 
  "lang": "es"
}
```
*El campo `feed` determina si la habilidad se mostrará en la sección de habilidades. Si es `true`, se mostrará. Si es `false`, no se mostrará.*

#### Certificaciones (`certifications` - archivos JSON)
```json
{
  "title": "Nombre de la certificación",
  "issuer": "Entidad emisora",
  "date": "Ene 2023",
  "url": "https://certificado.com",
  "lang": "es"
}
```

#### Educación (`university` - archivos JSON)
```json
{
  "institution": "Nombre de la universidad",
  "degree": "Título obtenido",
  "field": "Campo de estudio",
  "dates": {
    "start": "Mar 2018",
    "end": "Dic 2022"
  },
  "lang": "es"
}
```

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas. Las traducciones se gestionan en `src/i18n/ui.ts`. Para añadir un nuevo idioma:

1. Agrega el nuevo idioma en `astro.config.mjs` en la configuración de i18n
2. Añade las traducciones en `src/i18n/ui.ts`
3. Crea versiones de tu contenido en el nuevo idioma en las carpetas de contenido

## 🚀 Instalación y uso

### Requisitos previos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-astro.git
cd portfolio-astro

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la build
npm run preview
```

## 🎨 Personalización

### Tema y estilos
- Los colores y variables del tema se definen en `tailwind.config.js`
- Los estilos globales están en `src/styles/global.css`
- El toggle de tema oscuro/claro se implementa en `src/scripts/theme.ts`

### Contenido
Para actualizar tu información personal:
1. Modifica los archivos JSON y MDX en las carpetas dentro de `src/content/`
2. Actualiza las traducciones en `src/i18n/ui.ts`
3. Actualiza las constantes en `src/lib/const.ts` con tus propios enlaces
4. Reemplaza las imágenes en `src/assets/` y `public/`

