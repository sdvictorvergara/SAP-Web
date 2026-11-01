# SAP – preview web móvil

React + Vite + React Router + Bootstrap Icons. Es una maqueta navegable, sin backend.

```bash
npm install
npm run dev
```

## Cómo funciona
- **Login:** solo visual, cualquier dato entra. El icono de cuenta del header vuelve al login.
- **Datos:** `src/data/servers.json` y `src/data/services.json`. Los servidores se cargan en el
  estado de `App.jsx`; los cambios (encender/apagar, editar, añadir, eliminar) viven en memoria
  y se pierden al recargar la página.
- **Servicios:** solo lectura (se muestran con su estado del JSON).

## Estructura
- `src/App.jsx`        rutas, header, menú lateral y estado de los servidores
- `src/pages/`         Login, Home, Servers, ServerDetail (ver/editar/añadir), Services
- `src/components/`    Header, SideMenu, ServerCard, ServiceGroup, Modal, Field, etc.
