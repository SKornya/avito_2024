import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      'process.env.TOKEN': JSON.stringify(process.env.TOKEN),
    }),
  ],
  server: {
    port: 7070,
  }
});
