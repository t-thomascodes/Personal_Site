import { defineType, defineField } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt', rows: 3 }),
    defineField({ name: 'coverImage', type: 'image', title: 'Cover Image' }),
    defineField({ name: 'body', type: 'array', title: 'Body', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
  ],
})

export const travelEntry = defineType({
  name: 'travelEntry',
  title: 'Travel Entry',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'coordinates', type: 'geopoint', title: 'Coordinates' }),
    defineField({ name: 'date', type: 'date', title: 'Date' }),
    defineField({ name: 'story', type: 'text', title: 'Story' }),
    defineField({ name: 'photos', type: 'array', title: 'Photos', of: [{ type: 'image' }] }),
    defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
  ],
})

export const inspiration = defineType({
  name: 'inspiration',
  title: 'Inspiration',
  type: 'document',
  fields: [
    defineField({
      name: 'title', type: 'string', title: 'Title',
    }),
    defineField({
      name: 'type', type: 'string', title: 'Type',
      options: { list: ['art', 'quote', 'book', 'film', 'philosophy'] },
    }),
    defineField({ name: 'attribution', type: 'string', title: 'Attribution' }),
    defineField({ name: 'personalNote', type: 'text', title: 'Personal Note', rows: 3 }),
    defineField({ name: 'image', type: 'image', title: 'Image' }),
    defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
  ],
})
