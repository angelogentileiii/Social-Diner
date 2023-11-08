import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import UserList from './pages/UserList';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import AddReview from './pages/AddReview';
import Login from './pages/Login';
import AddProfile from './pages/AddProfile';

//home page components
import Landing from './components/Landing';
import InstagramCard from './components/InstagramCard';
import Infatuation from './components/Infatuation';
import Timeout from './components/Timeout';
import Eater from './components/Eater';

function App() {
  const [userData, setUserData] = useState([])

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://localhost:3080/verify", {
            method: "POST",
            headers: {
                'jwt-token': user.token
              }
        })
        .then(r => r.json())
        .then(r => {
            setLoggedIn('success' === r.message)
            setEmail(user.email || "")
        })
  }, [])

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
        element: <Home 
        loggedIn={loggedIn} 
        setLoggedIn={setLoggedIn} 
        email={email}
        />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                  <div>
                    <Landing />
                  </div>
                ),
                children: [
                  {
                    path: "/",
                    element: <InstagramCard />
                  },
                  {
                    path: "home/instagram",
                    element: <InstagramCard />
                  },
                  {
                    path: "home/infatuation",
                    element: <Infatuation />
                  },
                  {
                    path: "home/timeout",
                    element: <Timeout />
                  },
                  {
                    path: "home/eater",
                    element: <Eater />
                  }
                ]
            },
            {
              path: "/login",
              element: <Login setLoggedIn={setLoggedIn} setEmail={setEmail} loggedIn={loggedIn} />
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
              path: "/addprofile",
              element: <AddProfile 
              userData={userData}
              setUserData={setUserData}
              />
            }
        ]
    }
]

  const router = createBrowserRouter(routes);

  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
