import '.';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import UserList from './pages/UserList';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import AddReview from './pages/AddReview';
import Favorites from './pages/Favorites';

function App() {
  const [userData, setUserData] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:3000/profiles`)
      .then(response => response.json())
      .then(returnedData => {
        setUserData(returnedData)
      })
  }, [])

  const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <p>Placeholder text for Home Body (maybe table)</p>
            },
            {
              path: "/profiles",
              element: <UserList userData={userData}/>
            },
            {
              path: "profiles/:profileID",
              element: <Profile />
            },
            {
              path: "/:profileID/addreview",
              element: <AddReview userData={userData}/>
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
