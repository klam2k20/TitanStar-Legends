// vite.config.ts
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.js'],
    testMatch: ['./src/tests/**/*.test.jsx'],
    globals: true,
  },
});
