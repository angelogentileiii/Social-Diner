import './';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import AddReview from './pages/AddReview';
import Favorites from './pages/Favorites';

function App() {

  const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <p>Home Page</p>
            },
            {
                path: "/profiles/:username",
                element: <Profile />
            },
            {
              path: "/addreview",
              element: <AddReview />
            },
            {
              path: "/favorites",
              element: <Favorites />
            }
        ]
    }
]

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <RouterProvider router={router} />
      </body>
    </div>
  );
}

export default App;
