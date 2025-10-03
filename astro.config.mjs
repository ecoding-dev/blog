import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog.ecoding.dev',
    integrations: [mdx(), sitemap(), partytown()],
    vite: {
        plugins: [tailwindcss()],
    },
});