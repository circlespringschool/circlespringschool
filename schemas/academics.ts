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
      title: 'Academics Overview',
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
      name: 'programsOverview',
      title: 'Programs Overview Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Program Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Program Description',
              type: 'text',
            },
            {
              name: 'features',
              title: 'Program Features',
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
          ],
        },
      ],
    },
    {
      name: 'curriculumApproach',
      title: 'Curriculum Approach Section',
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
          title: 'Description Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'pillars',
          title: 'CBC Pillars',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Pillar Name',
                  type: 'string',
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'classPrograms',
      title: 'Class Programs (Tabs)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tabId',
              title: 'Tab ID',
              type: 'string',
              description: 'e.g., preschool, lowerprimary, upperprimary',
            },
            {
              name: 'title',
              title: 'Program Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Program Description',
              type: 'text',
            },
            {
              name: 'focusAreas',
              title: 'Key Focus Areas',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'features',
              title: 'Program Features',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'image',
              title: 'Program Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'color',
              title: 'Color Theme',
              type: 'string',
              description: 'e.g., red, blue, green',
            },
          ],
        },
      ],
    },
    {
      name: 'facilities',
      title: 'Academic Facilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Facility Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Facility Description',
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
    {
      name: 'admissionProcess',
      title: 'Admission Process',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
        },
        {
          name: 'requirements',
          title: 'Admission Requirements',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Requirement Text',
                  type: 'string',
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                },
                {
                  name: 'color',
                  title: 'Card Color',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'calendar',
          title: 'Academic Calendar',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'term',
                  title: 'Term Name',
                  type: 'string',
                },
                {
                  name: 'period',
                  title: 'Period',
                  type: 'string',
                },
                {
                  name: 'deadline',
                  title: 'Application Deadline',
                  type: 'string',
                },
                {
                  name: 'color',
                  title: 'Card Color',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Step Number',
                  type: 'number',
                },
                {
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Step Description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};