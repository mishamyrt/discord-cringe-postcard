export interface Postcard {
  id: number,
  categoryId: number,
  fullSlug: string,
  title: string,
  image: string,
  altTag: string,
  isFavorite: boolean,
  createdAt: string,
  hasMp4: boolean,
  hasWebm: boolean,
  hasGif: boolean,
  hasJpeg: boolean,
  hasWebp: boolean,
  hasAnimatedWebp: boolean,
  webExt?: string,
  posterImage?: string,
  youtubeLink?: string,
  androidExt?: string,
  iosExt?: string
}
