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
      name: 'overview',
      title: 'Activities Overview',
      type: 'blockContent',
    },
    {
      name: 'categories',
      title: 'Activity Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'category',
          title: 'Category',
          fields: [
            {
              name: 'name',
              title: 'Category Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Category Description',
              type: 'blockContent',
            },
            {
              name: 'activities',
              title: 'Activities in Category',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'activity',
                  title: 'Activity',
                  fields: [
                    {
                      name: 'name',
                      title: 'Activity Name',
                      type: 'string',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: 'description',
                      title: 'Activity Description',
                      type: 'blockContent',
                    },
                    {
                      name: 'schedule',
                      title: 'Schedule',
                      type: 'string',
                    },
                    {
                      name: 'instructor',
                      title: 'Instructor',
                      type: 'string',
                    },
                    {
                      name: 'images',
                      title: 'Activity Images',
                      type: 'array',
                      of: [{ type: 'image' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};