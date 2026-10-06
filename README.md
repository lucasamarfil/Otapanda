# Otapanda

Galería de personajes creada con HTML, CSS y JavaScript.

## Características
- Galería dinámica de personajes
- Página individual por personaje
- 100 entradas de personajes con sus series
- Estilo visual con fondo negro y detalles en amarillo
- Diseño de una sola página para evitar duplicación de archivos

## Estructura
- `index.html` — portada principal
- `galeria.html` — galería dinámica
- `personaje.html` — detalle del personaje
- `characters.js` — base de datos de personajes
- `gallery.js` — renderizado de la galería
- `images/` — imágenes del proyecto

## Ejecutar localmente
Abre cualquiera de estos archivos en tu navegador:
- `index.html`
- `galeria.html`

## GitHub
Este proyecto usa Git LFS para manejar imágenes pesadas.

Para publicar en GitHub:
1. Crear un repositorio vacío en GitHub.
2. En la terminal del proyecto ejecutar:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/lucasamarfil/Otapanda.git
   git push -u origin main
   ```

## Nota
Las imágenes están configuradas con Git LFS en [.gitattributes](.gitattributes).
