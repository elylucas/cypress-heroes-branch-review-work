import { defineConfig } from 'cypress';
import { createHero, deleteHero } from './cypress/support/data';
import fs from 'fs';

export default defineConfig({
  projectId: 'x2youg',
  e2e: {
    video: true,
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      on('task', {
        createHero,
        deleteHero,
      });
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
