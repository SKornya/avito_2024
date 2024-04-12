import { BASE_URL, routes } from '../routes';
import { Movie, QueryOptions } from '../types';

const token = process.env.REACT_APP_API_TOKEN;

export const fetchFilms = async (options: QueryOptions): Promise<{ docs: Movie[] }> => {
  const { page, limit } = options;
  const params = new URLSearchParams();
  params.append('page', String(page));
  params.append('limit', String(limit));

  const url = `${BASE_URL}${routes.api.films}?${params.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-API-KEY': token || '',
      },
    });

    if (!response.ok) {
      throw Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
    throw Error;
  }
};
