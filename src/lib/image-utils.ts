import type { ImageMetadata } from 'astro';

export type ImageSource = ImageMetadata | string;

export function isLocalImage(src: ImageSource): src is ImageMetadata {
  return typeof src !== 'string' && 'src' in src && 'width' in src && 'height' in src;
}
