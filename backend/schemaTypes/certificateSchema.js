import {defineField, defineType} from 'sanity'

export const certificateSchema = defineType({
  name: 'certificates',
  title: 'Certificates',
  type: 'document',
  fields: [
    defineField({
      name: 'image', // Field name for the title
      title: 'Image', // Label for the title
      type: 'image', // The field type
      options: {
        hotspot: true,
      },
    }),
  ],
})
