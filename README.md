# Clon de Chat App - Angular 17
### Trabajo Final Integrador - UTN BA
![Status](https://img.shields.io/badge/Status-Completado-success) ![Angular](https://img.shields.io/badge/Angular-17%2B-DD0031?logo=angular)

## Descripción del Proyecto
Esta aplicación es una interfaz de chat responsiva desarrollada como Trabajo Final Integrador para el curso "Desarrollo en Angular". Permite a los usuarios ver listas de contactos, filtrar chats en tiempo real e intercambiar mensajes con un sistema automatizado de respuestas de bot. El proyecto sigue estrictamente los estándares más recientes de Angular 17, utilizando Componentes Standalone y Signals.

## Stack Tecnológico
El proyecto está construido usando las siguientes tecnologías y patrones arquitectónicos:

- **Framework:** Angular 17+
- **Arquitectura:** Componentes Standalone (Sin NgModules)
- **Gestión de Estado:** Angular Signals (`signal`, `computed`)
- **Formularios:** Reactive Forms (`FormControl`, `Validators`)
- **Estilos:** CSS Nativo (Flexbox/Grid), Diseño Responsivo (Mobile/Desktop), Sin librerías UI externas
- **Enrutamiento:** Angular Router (Lazy Loading)

## Características Principales
- [x] **Diseño Responsivo:** Vista adaptativa de 2 columnas en Desktop y 1 columna en Mobile.
- [x] **Enrutamiento:** Implementación de rutas para `/chats` (lista), `/chats/:id` (detalle) y `/nuevo` (nuevo chat).
- [x] **Filtro en Tiempo Real:** Búsqueda eficiente de contactos usando Angular Signals.
- [x] **Interfaz Inteligente:** Distinción visual entre mensajes enviados (alineados a la derecha) y recibidos (alineados a la izquierda).

## Instalación y Uso
Para ejecutar el proyecto localmente, seguí estos pasos:

1. **Instalá las dependencias:**
   ```bash
   npm install
   ```

2. **Iniciá el servidor de desarrollo:**
   ```bash
   npm run start
   ```

3. **Accedé a la aplicación:**
   Abrí tu navegador y navegá a `http://localhost:4200`

## Estructura del Proyecto
El directorio `src/app` está organizado para asegurar separación de responsabilidades entre componentes de características, layouts y servicios principales:

```text
src/
└── app/
    ├── chats-component/       # Característica: Lista de chats y filtrado
    ├── chats-detail-component/# Característica: Vista de conversación individual
    ├── empty-chat/            # Compartido: Estado de marcador de posición sin selección
    ├── main-layout/           # Principal: Envoltorio de layout de la aplicación
    ├── new-chat-component/    # Característica: Formulario para iniciar un nuevo chat
    ├── services/              # Principal: Gestión de datos usando Signals
    ├── app.config.ts          # Configuración de la aplicación
    └── app.routes.ts          # Definiciones de enrutamiento
```

## Despliegue
La aplicación está desplegada y puede verse en vivo en:
**Desplegada en Vercel/Netlify:** [web-chat-angular.vercel.app](https://web-chat-angular.vercel.app)

---
*Desarrollado por Damian Canton para UTN BA.*
