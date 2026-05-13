export const HOMEPAGE_BANNER_QUERY = `
  *[_type == "banner"] | order(_updatedAt desc)[0]{
    title,
    subtitle,
    description
  }
`;

