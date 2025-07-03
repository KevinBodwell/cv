export type PortableBlock =
  | PortableHeading
  | PortableParagraph
  | PortableImage
  | PortableYouTube
  | PortableLink
  | PortableTagList
  | PortableBulletedList;

export interface BaseBlock {
  type: string;
  className?: string;
}

export interface PortableHeading extends BaseBlock {
  type: 'heading';
  level: 1 | 2 | 3 | 4;
  text: string;
  id?: string; // optional anchor ID
}

export interface PortableParagraph extends BaseBlock {
  type: 'paragraph';
  text: string;
}

export interface PortableImage extends BaseBlock {
  type: 'image';
  src: string;
  alt?: string;
  aspectRatio?: string; // e.g., "16/9", "4/3"
  caption?: string; // optional caption for the image
}

export interface PortableYouTube extends BaseBlock {
  type: 'youtube';
  videoId: string;
  title?: string;
}

export interface PortableLink extends BaseBlock {
  type: 'link';
  text: string;
  href: string;
  newTab?: boolean;
}

export interface PortableTagList extends BaseBlock {
  type: 'taglist';
  tags: string[];
}

export interface PortableBulletedList extends BaseBlock {
  type: 'bulleted-list';
  items: string[];
}

