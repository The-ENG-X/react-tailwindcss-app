import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><NavLink to="/" activeClassName="font-bold">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="font-bold">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="font-bold">Contact</NavLink></li>
          <li><NavLink to="/login" activeClassName="font-bold">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
