import React from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

import './App.module.scss';
import GoalList from './goals/pages/GoalList';
import ErrorPage from './error/error-page';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Places from './places/pages/Places';
import Nav from './shared/components/Navigation/Nav';
import UserPlaces from './places/pages/UserPlaces';

function App() {

  React.useEffect(() => {
      const googleMapApiScript = window.document.createElement('script');
      googleMapApiScript.src = `https://maps.googleapis.com/maps/api/js?key=${window.env.GOOGLE_KEY}&libraries=geometry,places`;
      googleMapApiScript.async = true;
      window.document.body.appendChild(googleMapApiScript);
  }, []);

  const getAlignedJSX = (element) => {
    return (
    <React.Fragment>
      <Nav />
      {element}
    </React.Fragment>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: getAlignedJSX(<h1>Welcome to the MERN shop</h1>),
      errorElement: <ErrorPage />,
    },
    {
      path: "/goalList",
      element: getAlignedJSX(<GoalList />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/users",
      element: getAlignedJSX(<Users />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/users/:uid/places",
      element: getAlignedJSX(<UserPlaces />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/places",
      element: getAlignedJSX(<Places />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/places/new",
      element: getAlignedJSX(<NewPlace />),
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    }
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>
  );
}

export default App;
