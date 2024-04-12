import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(), 
		tsconfigPaths()
    ],
	envDir: 'env',
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
        port: 5080
    },
});
