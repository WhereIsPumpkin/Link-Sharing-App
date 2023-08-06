import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import HomePage from './pages/HomePage.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.tsx';
import PrivateRouteLogin from './components/PrivateRouteLogin.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<PrivateRouteLogin />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>

      <Route path='' element={<PrivateRoute />}>
        <Route index element={<HomePage />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
