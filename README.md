# 📝 Todo App IO

> Aplicación de gestión de tareas moderna con soporte de dark/light mode, filtros por estado y persistencia de datos.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Características

- ➕ **Añadir tareas** — mediante click o pulsando `Enter`
- ✅ **Marcar como completadas** — con checkbox animado y texto tachado
- 🗑️ **Eliminar tareas** — botón visible al hacer hover
- 🔍 **Filtrado** — por estado: Todas / Activas / Completadas
- 🧹 **Limpiar completadas** — elimina de un click todas las tareas terminadas
- 🌙 **Dark / Light mode** — con transición suave y persistencia
- 💾 **Persistencia** — los datos se guardan en `localStorage` y sobreviven a recargas
- 📱 **Responsive** — imagen de fondo adaptada a móvil y escritorio
- ♿ **Accesible** — roles ARIA, `aria-label`, focus visible, semántica HTML correcta

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| [React](https://react.dev/) | `18.3.x` | Librería UI — componentes y hooks |
| [Vite](https://vitejs.dev/) + [plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) | `5.4.x` | Build tool con transpilación SWC (más rápido que Babel) |
| [Styled Components](https://styled-components.com/) | `6.1.x` | CSS-in-JS — estilos por componente con soporte de temas |
| [normalize.css](https://necolas.github.io/normalize.css/) | `8.0.x` | Reset CSS cross-browser |
| [uuid](https://github.com/uuidjs/uuid) | `10.0.x` | Generación de IDs únicos para cada tarea |
| [ESLint](https://eslint.org/) | `9.9.x` | Linting estático de código JavaScript/JSX |

### Fuentes
- **Josefin Sans** (Bold + Regular) — cargada localmente en `/public/fonts/`

---

## 🚀 Guía de inicialización

### Prerrequisitos

Asegúrate de tener instalado en tu sistema:

- **Node.js** `>= 18.0.0` — [Descargar Node.js](https://nodejs.org/)
- **npm** `>= 9.0.0` (viene incluido con Node.js)

Verifica tu versión:

```bash
node --version
npm --version
```

---

### Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/AlexMunozDevWeb/todo-app-io.git
cd todo-app-io
```

2. **Instala las dependencias**

```bash
npm install
```

---

### Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:5173` |
| `npm run build` | Genera el bundle de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm run lint` | Ejecuta ESLint para revisar errores de código |
| `npm run lint:fix` | Ejecuta ESLint y corrige automáticamente los errores |

---

### Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador. El servidor soporta **Hot Module Replacement (HMR)**, los cambios se reflejan instantáneamente sin recargar la página.

---

### Build de producción

```bash
npm run build
```

El bundle optimizado se genera en la carpeta `/dist`. Para previsualizar el resultado antes de desplegarlo:

```bash
npm run preview
```

---

## 🗂️ Estructura del proyecto

```
todo-app-io/
├── public/
│   ├── fonts/                  # Fuentes locales (Josefin Sans)
│   └── images/                 # Imágenes y SVGs (backgrounds, iconos)
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabecera: título, toggle de tema, formulario
│   │   ├── ListTodoWrapper.jsx # Lista de tareas + filtros + estado vacío
│   │   └── SingleTodo.jsx      # Componente de tarea individual
│   ├── hooks/
│   │   └── useTodoList.js      # Lógica de estado + persistencia localStorage
│   ├── styles/
│   │   └── DarkModeStyles.js   # Styled component con estilos dark/light
│   ├── App.jsx                 # Componente raíz — composición de la app
│   ├── index.css               # Estilos globales, variables CSS, reset
│   └── main.jsx                # Punto de entrada — renderizado en el DOM
├── index.html                  # HTML base con meta SEO y Open Graph
├── vite.config.js              # Configuración de Vite
├── eslint.config.js            # Configuración de ESLint (flat config)
└── package.json                # Metadatos y dependencias del proyecto
```

---

## 🏗️ Decisiones de arquitectura

### CSS-in-JS con Styled Components
Los estilos están colocalizados con cada componente, lo que facilita el mantenimiento y evita colisiones de nombres. El tema dark/light se implementa mediante clases CSS (`dark-mode` / `light-mode`) aplicadas al contenedor raíz, aprovechando la cascada CSS nativa.

### Custom Hook `useTodoList`
Toda la lógica de negocio (CRUD, filtrado, tema) está encapsulada en un único hook personalizado. Los componentes sólo reciben props y disparan eventos, siguiendo el principio de separación de responsabilidades.

### Persistencia con localStorage
Se utilizan inicializadores lazy de `useState` (`() => readFromStorage(...)`) para leer del almacenamiento sólo en el montaje inicial, evitando lecturas en cada render. La persistencia se actualiza reactivamente con `useEffect` sincronizado con cada cambio de estado.

### Variables CSS vs props de tema
Las variables CSS en `:root` sirven como tokens de diseño globales. Las reglas de tema dark/light se aplican mediante selectores de clase en el styled component raíz (`DarkModeStyles`), un patrón más eficiente que pasar props de tema a cada componente.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más información.