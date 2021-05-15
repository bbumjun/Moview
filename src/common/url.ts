// tmdb base url
export const baseUrl = "https://api.themoviedb.org/3/";

// tmdb image url
export const smallImgUrl = "https://image.tmdb.org/t/p/w500";
export const originalImgUrl = "https://image.tmdb.org/t/p/original";
export const imageUrl = "https://image.tmdb.org/t/p/";
export const imgSize = {
  small: "w500",
  original: "original",
};

// tmdb data request url
export const discoverUrl = "https://api.themoviedb.org/3/discover/";

export const getSmallImgUrl = (path: string) =>
  path ? imageUrl + imgSize.small + path : undefined;
export const getOriginalImgUrl = (path: string) =>
  path ? imageUrl + imgSize.original + path : undefined;
