import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

import { routes } from './routes';
import { ConfigProvider, Layout, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import AppHeader from './components/AppHeader';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  const themeSwitch = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const router = createBrowserRouter([
    {
      path: routes.app.main,
      element: <MainPage isDarkTheme={isDarkTheme} themeSwitch={themeSwitch} />,
      errorElement: <ErrorPage />,
    },
  ]);

  const { useToken } = theme;
  const { token } = useToken();

  useEffect(() => {
    document.body.style.backgroundColor = token.colorBgContainer;
  }, [token]);

  console.log(isDarkTheme);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
