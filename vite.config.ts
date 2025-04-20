import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { manifest } from "./manifest";
import Sitemap from 'vite-plugin-sitemap';
// https://vite.dev/config/

export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {exportType: "default", ref: true, svgo: false, titleProp: true},
            include: "**/*.svg",
        }),
        manifest,
        Sitemap({
            hostname: 'http://localhost:5173',
        })

    ],
})
