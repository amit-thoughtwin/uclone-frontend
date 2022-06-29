import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from '../Component/Appbar/Appbar';
import Home from '../pages/Home/Home';
import Login from '../pages/login/login';
import Register from '../pages/register/Register';

export default function RouteLink() {
  const item = [
    { path: '/', Component: Home },
    { path: '/login', Component: Login },
    { path: '/register', Component: Register },
  ];

  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        {item.map((items: any) => <Route path={items.path} element={<items.Component />} />)}
      </Routes>
    </BrowserRouter>
  );
}
