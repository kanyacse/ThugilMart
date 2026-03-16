import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ThugilMart/', // 👈 add your GitHub repo name here
});
