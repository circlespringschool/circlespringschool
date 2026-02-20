import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Circle Spring School Content Management',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id-here',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});