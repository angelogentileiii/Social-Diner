import './';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

function App() {

  const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: 
                <>
                  <h1>HomePage</h1>
                </>
            },
            {
                path: "/login",
                element: <LoginPage />
            }
        ]
    }
]

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Page Header</h1>
      </header>
      <body>
        <RouterProvider router={router} />
      </body>
    </div>
  );
}

export default App;
