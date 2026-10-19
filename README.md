# Amnésis — lector y capturas editoriales

Actualización sobre el prototipo anterior. Incluye tema nocturno azul tinta, elimina la lupa y añade exportación de un fragmento seleccionado o del artículo completo.

## Instalación

En la raíz del proyecto: `npm install` y `npm run dev`. Abre http://localhost:4321/.

Si ya usas el proyecto anterior, puedes reemplazar **únicamente**:
- `src/components/ReadingTools.astro`
- `src/styles/global.css`
- `src/pages/publicaciones/[slug].astro`

## Capturas

Abre un artículo. Selecciona un párrafo con el ratón, pulsa «Herramientas → Captura → Capturar fragmento seleccionado». Para el artículo completo usa «Capturar artículo completo». Las capturas tienen fondo marfil, nombre Amnésis, título, texto y firma del autor al final, independientemente del tema elegido.

Para imágenes que exceden 16000 píxeles de alto al exportar a PNG a 2×, el sistema genera un archivo SVG de altura variable para que se pueda ampliar sin pixelación. Las capturas representan el texto del artículo, sin la interfaz, y simplifican formatos de texto internos. En SVG se emplea una fuente serif de compatibilidad y puede verse ligeramente distinta si no está instalada la tipografía web.

## Nota

Los textos de ejemplo del prototipo no corresponden a escritos definitivos. El archivo de artículos sigue utilizando el mismo sistema de datos que la versión anterior.
