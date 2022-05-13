import React from "react";
import FeatherIcons from "feather-icons-react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">
          <h1>Movie App</h1>
        </div>
        <div className="navbar-links">
          {/* <a href="/Home">Home</a> */}
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/newAndPopular">New and Popular</Link>
        </div>
        <div className="search-bar">
          <FeatherIcons icon="search" size="24" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
