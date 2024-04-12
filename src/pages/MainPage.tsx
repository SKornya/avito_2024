import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import api from '../api';
import { AppHeaderProps, Movie } from '../types';
import {
  Layout,
  Pagination,
  PaginationProps,
  Skeleton,
  // Spin,
  theme,
} from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import AppHeader from '../components/AppHeader';
import MovieCard from '../components/MovieCard';

const MainPage: FunctionComponent<AppHeaderProps> = ({
  isDarkTheme,
  themeSwitch,
}) => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [moviesCount, setMoviesCount] = useState<number>(0);

  const [movies, setMovies] = useState<Movie[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // смена цвета фона body в завсисимости от темы
  const { useToken } = theme;
  const { token } = useToken();

  const getData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await api.fetchFilms({
        page,
        limit: pageSize,
      });

      setMovies(data.docs);
      setMoviesCount(data.total);
      console.log(data);
    } catch (error: unknown) {
      console.log(error);
    }

    setIsLoading(false);
  }, [page, pageSize]);

  useEffect(() => {
    document.body.style.backgroundColor = token.colorBgContainer;
  }, [token]);

  const onPageChange: PaginationProps['onChange'] = async (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Layout style={{ margin: 0 }}>
      <Header style={{ minHeight: '80px', display: 'flex' }}>
        <AppHeader isDarkTheme={isDarkTheme} themeSwitch={themeSwitch} />
      </Header>
      <Content>
        {!isLoading ? (
          movies.map((movie: Movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })
        ) : (
          <Skeleton />
        )}

        {movies.length > 0 && (
          <Pagination
            showSizeChanger
            onChange={onPageChange}
            defaultCurrent={page}
            total={moviesCount}
          />
        )}
      </Content>
    </Layout>
  );
};

export default MainPage;
