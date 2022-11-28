import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './App.module.scss';
import Header from './components/Header/Header';
import GoalList from './components/Main/GoalList';
import ErrorPage from './error/error-page';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Welcome to the MERN shop</h1>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/goalList",
      element: <GoalList />,
      errorElement: <ErrorPage />,
    }
  ]);

  return (
    <React.Fragment>
      <Header />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
