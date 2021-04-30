export interface IContentDetail {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  title?: string;
  release_date?: string;
  name?: string;
  first_air_date?: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  tagline: string;
  vote_count: number;
  vote_average: number;
}

export interface IContent {
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  vote_average: number;
  vote_count: number;
  id: number;
}

export type IContentList = IContent[];
