import {VitePWA} from "vite-plugin-pwa";

const manifestData = {
  name: 'My Awesome App',
  short_name: 'MyApp',
  description: 'My Awesome App description',
  theme_color: '#ffffff',
  icons: [
    {
      src: 'pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ]
}


export const manifest = VitePWA(
    {


      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: false,
        sourcemap: true


      },
      injectRegister: 'auto',
      manifest: manifestData,
      devOptions: {
        enabled: true
      }
    }
)


