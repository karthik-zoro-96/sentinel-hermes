import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cyberplain.ai',
  output: 'static',
  integrations: [tailwind()],
});