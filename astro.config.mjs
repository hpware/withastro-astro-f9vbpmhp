// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
//import vue from '@astrojs/vue';


// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
    },

  build: {
    inlineStylesheets: 'always',
    inlineJavascript: 'always',
    compressHTML: true
  },

  //integrations: [vue()]
});