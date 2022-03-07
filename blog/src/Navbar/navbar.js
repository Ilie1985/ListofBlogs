import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>One blog at a time </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
