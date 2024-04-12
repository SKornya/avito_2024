import { FunctionComponent, useEffect, useState } from 'react';
import api from '../api';
import { AppHeaderProps, Movie } from '../types';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import AppHeader from '../components/AppHeader';

const MainPage: FunctionComponent<AppHeaderProps> = ({ isDarkTheme, themeSwitch }) => {
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number | null>(null);

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await api.fetchFilms({
          page: 1,
          limit: 1,
        });

        setMovies(movies.docs);
        console.log(movies.docs);
      } catch (error: unknown) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <Layout style={{ margin: 0 }}>
      <Header style={{ minHeight: '80px', display: 'flex' }}>
        <AppHeader isDarkTheme={isDarkTheme} themeSwitch={themeSwitch} />
      </Header>
      <Content>
        {123}
      </Content>
    </Layout>
  );
};

export default MainPage;
