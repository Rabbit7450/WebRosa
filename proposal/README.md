# Propuesta Romántica - Rosa 💖

Una página web interactiva para hacer una propuesta romántica con notificaciones automáticas mediante Netlify Forms.

## Características

- ✨ Diseño romántico con animaciones
- 🎵 Música de fondo
- 💌 Formulario con notificaciones automáticas
- 📱 Responsive design
- 🎨 Efectos visuales modernos

## Configuración de Notificaciones Netlify

### 1. Desplegar en Netlify

1. Sube este proyecto a un repositorio de GitHub
2. Conecta tu repositorio con Netlify
3. Despliega el sitio

### 2. Configurar Notificaciones por Email

1. Ve a tu dashboard de Netlify
2. Selecciona tu sitio
3. Ve a **Settings** > **Forms**
4. En **Form notifications**, haz clic en **Add notification**
5. Selecciona **Email notification**
6. Configura:
   - **Form name**: `proposal-response`
   - **Email to notify**: tu-email@ejemplo.com
   - **Subject**: `¡Rosa ha respondido a tu propuesta! 💖`

### 3. Configurar Notificaciones por Slack (Opcional)

1. En **Form notifications**, haz clic en **Add notification**
2. Selecciona **Slack notification**
3. Configura tu webhook de Slack
4. Personaliza el mensaje

### 4. Configurar Webhook (Opcional)

Para integraciones más avanzadas:

1. Selecciona **Outgoing webhook**
2. URL del webhook: `https://tu-servidor.com/webhook`
3. El webhook recibirá los datos del formulario en formato JSON

## Campos del Formulario

El formulario captura:
- `nombre`: Rosa
- `respuesta`: Sí
- `fecha`: Fecha y hora de la respuesta
- `form-name`: proposal-response

## Archivos Importantes

- `index.html`: Página principal
- `script.js`: Lógica de JavaScript
- `style.css`: Estilos CSS
- `netlify.toml`: Configuración de Netlify
- `_redirects`: Redirecciones del sitio

## Uso

1. Comparte el enlace de tu sitio con Rosa
2. Cuando ella haga clic en "Sí", recibirás una notificación automática
3. Los datos se guardan en el panel de Netlify Forms

¡Buena suerte con tu propuesta! 💕