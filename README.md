# Maison d'Or Patisserie

Una aplicación web para la pastelería Maison d'Or, construida con React, TypeScript y Vite.

## Ejecutar Localmente

**Prerrequisitos:** Node.js

1. Instala las dependencias:
   `npm install`
2. Ejecuta la aplicación:
   `npm run dev`

## Despliegue en GitHub Pages

La aplicación está configurada para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Pasos para el despliegue:

1. Sube este código a un repositorio de GitHub llamado `reposteria-`.
2. Ve a la configuración del repositorio (Settings > Pages).
3. En "Source", selecciona "Deploy from a branch".
4. Selecciona la rama `gh-pages` y la carpeta `/ (root)`.
5. Cada push a la rama `main` activará el despliegue automático.

### Despliegue manual (opcional):

Si prefieres desplegar manualmente:
1. Construye la aplicación: `npm run build`
2. Despliega: `npm run deploy`

La aplicación estará disponible en: https://danielgonzalesarce.github.io/reposteria-/
