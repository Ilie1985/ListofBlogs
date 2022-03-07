import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>One blog at a time </h1>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/create"}>NewBlog</Link>
        {/* <a href="/create">New Blog</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
