import { createClient } from 'next-sanity'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  token: process.env.SANITY_STUDIO_TOKEN as string,
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
})

export default sanityClient
