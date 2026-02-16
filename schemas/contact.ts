export default {
  name: 'contact',
  title: 'Contact Page Content',
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
      name: 'contactInformation',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
        },
        {
          name: 'officeHours',
          title: 'Office Hours',
          type: 'string',
        },
      ],
    },
    {
      name: 'enquiryFormText',
      title: 'Enquiry Form Text',
      type: 'blockContent',
    },
    {
      name: 'mapEmbedCode',
      title: 'Map Embed Code',
      description: 'Paste the embed code for Google Maps here',
      type: 'text',
    },
  ],
};