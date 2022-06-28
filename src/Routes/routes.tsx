import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Appbar } from '../Component';
import { Home, Login, Signup } from "../screen/index"
export default function RouteLink() {

    const item = [
        { path: '/', Component: Home },
        { path: '/login', Component: Login },
        { path: '/signup', Component: Signup },

    ];

    return (
        <BrowserRouter>
        <Appbar/>
            <Routes>
                {item.map((items: any) =>
                    <Route path={items.path} element={<items.Component />} />
                )}
            </Routes>
        </BrowserRouter>
    );
}