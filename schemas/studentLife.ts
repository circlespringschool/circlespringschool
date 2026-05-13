export default {
  name: "studentLife",
  title: "Student Life Page Content",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "title", title: "Hero Title", type: "string" },
        { name: "subtitle", title: "Hero Subtitle", type: "text" },
      ],
    },
    {
      name: "overviewCards",
      title: "Overview Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "Used by the frontend to pick an icon (e.g. Trophy, Palette, Users).",
            },
          ],
        },
      ],
    },
    {
      name: "sportsGallery",
      title: "Sports Gallery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Card Title", type: "string" },
            { name: "subtitle", title: "Card Subtitle", type: "string" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: "Used by the frontend to pick an icon (e.g. Trophy, Users).",
            },
          ],
        },
      ],
    },
    {
      name: "artsSection",
      title: "Arts & Culture Section",
      type: "object",
      fields: [
        { name: "badge", title: "Badge", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        {
          name: "featureCards",
          title: "Feature Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "title", title: "Title", type: "string" },
                { name: "subtitle", title: "Subtitle", type: "string" },
                { name: "icon", title: "Icon Name", type: "string" },
              ],
            },
          ],
        },
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [{ type: "image", options: { hotspot: true } }],
        },
      ],
    },
    {
      name: "clubs",
      title: "Clubs & Societies",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "icon", title: "Icon Name", type: "string" },
          ],
        },
      ],
    },
    {
      name: "ctaSection",
      title: "CTA Section",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "buttonLabel", title: "Button Label", type: "string" },
        { name: "buttonHref", title: "Button Link (href)", type: "string" },
      ],
    },
  ],
};

