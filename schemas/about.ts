export default {
  name: 'about',
  title: 'About Page Content',
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'storySection',
      title: 'Our Story Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'paragraphs',
          title: 'Story Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        },
        {
          name: 'image',
          title: 'Story Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Stat Value',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Stat Label',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'blockContent',
    },
    {
      name: 'visionStatement',
      title: 'Vision Statement',
      type: 'blockContent',
    },
    {
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Value Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Value Description',
              type: 'text',
            },
            {
              name: 'icon',
              title: 'Icon Name (Font Awesome)',
              type: 'string',
              description: 'e.g., fa-hourglass-half, fa-dove, fa-heart',
            },
            {
              name: 'iconColor',
              title: 'Icon Color Class',
              type: 'string',
              description: 'e.g., blue-100, green-100, red-100',
            },
          ],
        },
      ],
    },
    {
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'CTA Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'CTA Description',
          type: 'text',
        },
      ],
    },
  ],
};

