// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig(({mode}) => ({
    server: {
        port: 4250,
        strictPort: true
    },
    build: {
        sourcemap: true
    }
}));