import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'tgknckx1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-01',
});

const builder = imageUrlBuilder(client);

type SanityImageSource = string | Record<string, any>;

export function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}
