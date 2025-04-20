
**# ecommerce-app-react**

This repository demonstrates a project setup using **React**, **TypeScript**, **Vite**, **PWA**, **Sitemap**, **GSAP**, **Lenis**, and **Material UI (MUI)** for building an e-commerce web application.

## Project Setup

Follow the steps below to set up the project on your local machine.

### 1. Clone the Repository

First, clone the repository:

```bash
git clone https://github.com/madhanraj-official/ecommerce-app-react.git
cd ecommerce-app-react
```

### 2. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

This will install all the necessary dependencies for **React**, **TypeScript**, **Vite**, **PWA**, **Sitemap**, **GSAP**, **Lenis**, and **Material UI (MUI)**.

### 3. Run the Development Server

To run the project locally, use:

```bash
npm run dev
```

This will start the Vite development server. You can view the project at `http://localhost:`.

---

## 📦 Project Structure Documentation

### 🗂️ Root Directory
- `eslint.config.js` – ⚙️ ESLint configuration.
- `index.html` – 🧾 Root HTML template.
- `manifest.ts` – 📱 PWA manifest configuration (TypeScript).
- `map/` – 🗺️ Custom or project-specific folder (purpose not detailed).
- `node_modules/` – 📦 Installed dependencies managed by `pnpm`.
- `package.json` – 📜 Project dependencies and script definitions.
- `pnpm-lock.yaml` – 🔒 Lockfile to ensure consistent installs.
- `pnpm-workspace.yaml` – 🧩 Monorepo/workspace setup for `pnpm`.
- `README.md` – 📖 Project overview and documentation.
- `tsconfig.json` – 🛠️ Base TypeScript configuration.
- `tsconfig.app.json` – 🧪 TypeScript settings for the app.
- `tsconfig.node.json` – 🧱 TypeScript settings for Node.js parts.
- `vite.config.ts` – 🚀 Configuration for the Vite build tool.

### 🗃️ Public Directory
- `public/vite.svg` – 🖼️ Public static asset (e.g., logo).

### 📤 Dist Directory (🔧 Build Output)
- `dist/assets/` – 🧩 Compiled JS, CSS, and other asset files.
- `dist/index.html` – 🌐 Final HTML file for deployment.
- `dist/compose.yaml` – 🐳 Possibly Docker Compose config.
- `dist/manifest.webmanifest` – 🧾 PWA manifest.
- `dist/registerSW.js` – 🧭 Service worker registration.
- `dist/robots.txt` – 🤖 Bot indexing rules.
- `dist/sitemap.xml` – 🗺️ Sitemap for SEO.
- `dist/sw.js`, `sw.js.map` – 🛡️ Service worker and its map.
- `dist/vite.svg` – 🎨 SVG asset used in build.
- `dist/workbox-*.js`, `.map` – 🧰 Workbox-generated service worker scripts.

### 🧪 Src Directory
- `src/main.tsx` – 🔑 Application's entry point.
- `src/App.tsx` – 🧱 Root React component.

#### 📁 src/assets/
- 🖼️ Static files like images, fonts, etc.

#### 📁 src/components/
- 🧩 Reusable UI components (e.g., `Header`, `ThemeChanger`).

#### 📁 src/hooks/
- 🪝 Custom React hooks (e.g., `useTheme`).

#### 📁 src/layouts/
- 🖼️ Layout components (e.g., `DefaultLayout`).

#### 📁 src/pages/
- 📄 Route-level views like `HomePage`, `SettingsPage`, `Error404`, `Error500`.

#### 📁 src/routes/
- 🧭 App routing setup and router definitions.

#### 📁 src/services/
- 🔌 Utility functions or API service handlers.

#### 📁 src/store/
- 🗃️ State management setup (Redux or alternatives).

#### 📁 src/styles/
- `index.css` – 🎨 Global styles.
- `theme.css` – 🌓 Theme switch logic.
- `theme/` – 🌗 Theme definitions like dark/light.
- `components/` – 🧬 Styles scoped to components.
- `layouts/`, `pages/`, `widgets/` – 🧾 Scoped styles.

#### 📁 src/widgets/
- 🧱 Modular UI widgets (e.g., `SearchBarWidget`).

#### 📄 src/vite-env.d.ts
- 🔍 Vite-specific TypeScript declarations.

---

## Features

### 1. **React + TypeScript**

The project is set up with **React** and **TypeScript**, providing strong typing and easy-to-manage components.

### 2. **Vite**

The project uses **Vite** as the build tool, which offers fast development and optimized production builds.

### 3. **Progressive Web App (PWA)**

The project is configured as a **Progressive Web App** using the `vite-plugin-pwa` plugin. You can install it on mobile devices and access it offline.

### 4. **Sitemap Generation**

The **Sitemap** plugin automatically generates a sitemap.xml for better SEO, which helps search engines index your pages more effectively.

### 5. **GSAP for Animations**

**GSAP** is used for advanced animations. You can use GSAP's powerful animation capabilities to create smooth transitions and animations throughout your app.

### 6. **Lenis for Smooth Scrolling**

**Lenis** is included to provide smooth scrolling experiences, enhancing user interaction with the website.

### 7. **Material UI (MUI)**

**MUI** is used for beautiful and responsive UI components. You can use Material UI's components to create a modern, user-friendly interface for your e-commerce app.

---

## PWA Configuration

The PWA features are enabled by configuring the `vite-plugin-pwa`. The plugin will automatically register a service worker and set up caching.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [Vite Documentation](https://vitejs.dev/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Lenis Documentation](https://lenis.app/)
- [Material UI Documentation](https://mui.com/)





