export default {
  name: 'academics',
  title: 'Academics Page Content',
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
      title: 'Academics Overview',
      type: 'blockContent',
    },
    {
      name: 'programs',
      title: 'Academic Programs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'program',
          title: 'Program',
          fields: [
            {
              name: 'name',
              title: 'Program Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Program Description',
              type: 'blockContent',
            },
            {
              name: 'gradeLevels',
              title: 'Grade Levels',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'curriculum',
              title: 'Curriculum Details',
              type: 'blockContent',
            },
          ],
        },
      ],
    },
    {
      name: 'faculty',
      title: 'Faculty Information',
      type: 'blockContent',
    },
    {
      name: 'achievements',
      title: 'Academic Achievements',
      type: 'blockContent',
    },
  ],
};