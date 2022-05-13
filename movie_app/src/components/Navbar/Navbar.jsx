import React from "react";
// import FeatherIcons from "feather-icons-react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "@material-ui/icons";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

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
        <form className={showSearch ? "search-bar-show" : "search-bar"}>
          <input
            //hide search field if not in focus and clear the text entered.
            onBlur={() => {
              setShowSearch(false);
            }}
            required
            placeholder="Titles, name ..."
            type="search"
          />
          <Search
            style={showSearch ? { zIndex: "1" } : { display: "none" }}
            className="searchIcon"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
