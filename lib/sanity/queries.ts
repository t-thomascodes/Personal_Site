// Blog posts
export const allPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  "coverImage": coverImage.asset->url,
  tags
}`

export const postBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  "coverImage": coverImage.asset->url,
  tags
}`

// Travel entries
export const allTravelsQuery = `*[_type == "travelEntry"] | order(date desc) {
  _id,
  title,
  location,
  coordinates,
  date,
  story,
  "photos": photos[].asset->url,
  tags
}`

// Inspiration entries
export const allInspirationQuery = `*[_type == "inspiration"] | order(_createdAt desc) {
  _id,
  title,
  type,
  attribution,
  personalNote,
  "image": image.asset->url,
  tags
}`
