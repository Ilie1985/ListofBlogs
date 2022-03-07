import React from "react";
// import { useState, useEffect } from "react";
import BlogList from "../BlogList/bloglist";
import useFetch from "../UseFetch/useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList data={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
