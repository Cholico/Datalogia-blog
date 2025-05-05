// src/lib/sanityClient.ts

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'tgknckx1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-01',
});

const builder = imageUrlBuilder(client);

// Sin any, sin errores de importación
export function urlFor(source: unknown) {
  return builder.image(source).url();
}
