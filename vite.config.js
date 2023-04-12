import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     server: {
//         host: true,
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:4000',
//                 changeOrigin: true,
//                 secure: false,
//                 ws: true,
//                 rewrite: (path) => path.replace(/^\/api/, ""),
//             },
//         },
//     },
//     "github": {
//         "silent": true
//     },
//     "rewrites": [{
//         "source": "(.*)",
//         "destination": "/index.html"
//     }]

// })
export default defineConfig((mode) => {
    const env = loadEnv(mode, process.cwd());
    return {
        plugins: [react()],
        server: {
            host: true,
            proxy: {
                '/api': {
                    target: env.VITE_BACKEND_URL,
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
        "github": {
            "silent": true
        },
        "rewrites": [{
            "source": "(.*)",
            "destination": "/index.html"
        }]
    }
})