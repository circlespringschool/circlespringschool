# Circle Spring School Website with Sanity CMS

This project is a website for Circle Spring Academy with integrated Sanity CMS for content management.

## Setup Instructions

1. First, you'll need to set up a Sanity project:
   ```bash
   npx @sanity/cli login
   npx @sanity/cli init
   ```
   
2. During initialization, select "Create a new project" and follow the prompts.

3. After setup, you can run the Sanity Studio locally:
   ```bash
   npm run studio
   ```

## Environment Variables

Create a `.env` file in the root directory with these variables:
```
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

## Development

To run the static site locally:
```bash
npm run dev
```

## Deployment to Vercel

When deploying to Vercel, make sure to set the environment variables in your Vercel dashboard:
- SANITY_STUDIO_PROJECT_ID
- SANITY_STUDIO_DATASET

Vercel will automatically detect the Sanity Studio and deploy it alongside your website.

## Using the CMS

Once deployed, you can access the Sanity Studio at `/studio` on your domain (e.g., https://your-site.vercel.app/studio).

In the Sanity Studio, you can:
- Create and edit content for all pages (Home, About, Academics, Activities, Contact)
- Upload images and manage media
- Update text content for all sections
- Manage academic programs and activities

The content you create in Sanity CMS will be available to your frontend via API calls to the Sanity CDN.