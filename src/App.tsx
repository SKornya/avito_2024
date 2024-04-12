import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

import { routes } from './routes';
import { ConfigProvider, theme } from 'antd';
import { useState } from 'react';

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
    {
      path: `${routes.app.film}/:id`,
      element: <></>,
      errorElement: <ErrorPage />,
    }
  ]);

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
