"use server";

import dbConnect from "@/server/connectdb";
import Blog from "@/server/models/blog.model";

export const fetchBlogs = async () => {
  await dbConnect();
  const blogs = await Blog.find();
  return blogs;
};
