import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header py-3">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div className="logo">
          <h1>AI Stocks</h1>
        </div>
        <nav>
          <ul className="nav-list list-unstyled d-flex gap-3 m-0">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;