"use client";
import { fetchBlogs } from "@/actions/blogs";
import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs().then((res) => setBlogs(res));
  }, []);

  return <div>BlogList</div>;
};

export default BlogList;
