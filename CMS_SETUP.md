# Circle Spring CMS Setup (Sanity)

This project uses Sanity as the CMS and Next.js as the frontend.

## 1) Configure environment variables

1. Copy `.env.example` to `.env.local`.
2. Set your Sanity project values:
   - `SANITY_STUDIO_PROJECT_ID`
   - `SANITY_STUDIO_DATASET`
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

Use the same project ID and dataset for both Studio and frontend.

## 2) Run the CMS locally

```bash
npm run cms:dev
```

This starts Sanity Studio so admins can create/edit content.

## 3) Build static Studio output for `/studio`

```bash
npm run cms:build
```

This builds Studio into the `studio/` folder. The repo's route config serves that path at `/studio`.

## 4) Frontend integration status

- Sanity client is in `lib/sanity/client.ts`.
- Homepage banner query is in `lib/sanity/queries.ts`.
- Home page uses CMS banner content when available and falls back to existing language constants.

## 5) First content to create

In Studio, create one `Banner Content` document with:
- `title`
- `subtitle`
- `description` (optional)

Once published, the homepage hero title/subtitle will update from CMS.

