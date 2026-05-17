import { defineConfig } from 'vite';

export default defineConfig({
    root: 'source',
    css: {
        devSourcemap: true
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    server: {
        open: true
    }
})