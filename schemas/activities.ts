export default {
  name: 'activities',
  title: 'Activities Page Content',
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
      name: 'overview',
      title: 'Activities Overview',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Overview Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Overview Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'activityCategories',
      title: 'Activity Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Category Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Category Description',
              type: 'text',
            },
            {
              name: 'activities',
              title: 'Activities List',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
            },
            {
              name: 'iconColor',
              title: 'Icon Color Class',
              type: 'string',
            },
            {
              name: 'borderColor',
              title: 'Border Color Class',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'featuredActivities',
      title: 'Featured Activities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Activity Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Activity Description',
              type: 'text',
            },
            {
              name: 'date',
              title: 'Date/Time',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Activity Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'benefits',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Benefit Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Benefit Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Benefit Description',
                  type: 'text',
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                },
                {
                  name: 'iconColor',
                  title: 'Icon Color Class',
                  type: 'string',
                },
              ],
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