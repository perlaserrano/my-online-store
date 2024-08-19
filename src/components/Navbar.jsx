import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../assets/css/navbar.css';

export const Navbar = () => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? { color: '#ff5722' } : {};
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          Pearl Store |
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
                style={getLinkStyle('/products')}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={getLinkStyle('/about')}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={getLinkStyle('/contact')}>
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-light" type="submit">
              <i className="bi bi-cart3"></i>
            </button>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
