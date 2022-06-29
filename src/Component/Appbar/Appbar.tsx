import React from 'react';
import {
  SearchOutlined,
  ShoppingCartOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function Appbar() {
  return (
    <div>
      <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      <div className="appbar flex items-center space-x-1 md:space-x-8 shadow-md h-24">
        <img
          className="logo_img h-9 mt-2 ml-5"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="img-logo"
        />
        <p className="section_Categories mt-4 text-lg">Categories</p>

        <div className="header-searchBar mt-2 rounded-full w-1/2 border-2 border-black-600 h-16 bg-slate-50">
          <SearchOutlined className="search-icon ml-7 mt-4 text-2xl" />
          <input
            className="search-input w-5/6 ml-8 h-14 focus:outline-none text-lg bg-slate-50"
            placeholder="Search for anything"
          />
        </div>

        <p className="udemy_business mt-2 text-lg">Udemy Business</p>
        <p className="teach_for_udemy mt-2 text-lg">Teach for Udemy</p>
        <ShoppingCartOutlined className="cart mt-2 text-2xl" />

        <Link to="/login">
          {' '}
          <button type="button" className="button mt-2 text-lg border border-black-500 text-black font-bold py-2 px-4 rounded">Login</button>
        </Link>
        <Link to="/register"><button type="button" className="button mt-2 text-lg text-white bg-gray-800 font-bold py-2 px-4 rounded">Signup</button></Link>
        <button type="button" className="button mt-2 text-lg border border-black-600 text-blac font-bold py-2 px-4 rounded">
          <GlobalOutlined className="world text-2xl" />
        </button>
      </div>
    </div>
  );
}
