export default {
  name: 'imageConfig',
  type: 'document',
  title: 'Image Configuration',
  fields: [
    {
      name: 'home',
      title: 'Home Page Settings',
      type: 'object',
      fields: [
        {
          name: 'heroIntervalMs',
          title: 'Hero Slide Duration (milliseconds)',
          type: 'number',
          initialValue: 5000,
          validation: Rule => Rule.min(2000).max(10000),
          description: 'Time between hero image transitions'
        },
        {
          name: 'heroSlides',
          title: 'Hero Images',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'sanity.imageAsset' }}],
          options: {
            editModal: 'fold'
          }
        }
      ]
    },
    {
      name: 'academics',
      title: 'Academics Page',
      type: 'object',
      fields: [
        {
          name: 'featuredImages',
          title: 'Featured Images',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'sanity.imageAsset' }}],
          options: {
            editModal: 'fold'
          }
        }
      ]
    },
    {
      name: 'activities',
      title: 'Activities Page',
      type: 'object',
      fields: [
        {
          name: 'gallery',
          title: 'Activity Gallery',
          type: 'array',
          of: [{ type: 'reference', to: { type: 'sanity.imageAsset' }}],
          options: {
            editModal: 'fold'
          }
        }
      ]
    }
  ]
};