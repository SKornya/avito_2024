export interface QueryOptions {
  page: number;
  limit: number;
}

export interface Movie {
  id: number;
  type: 'movie' | string;
  name: string;
  genres: Array<{ name: string }>;
  counties: Array<{ name: string }>;
  logo: {
    url: string;
  }
  poster: {
    url: string;
    previewUrl: string;
  }
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
  }
  ageRating: number;
  ratingMpaa: string;
  shortDescription: string;
  description: string;
  year: number;
  isSeries: boolean;
}

export interface AppHeaderProps {
  isDarkTheme: boolean;
  themeSwitch: () => void;
}
