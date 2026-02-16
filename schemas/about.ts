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
          type: 'string',
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
      name: 'history',
      title: 'School History',
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
          ],
        },
      ],
    },
  ],
};

