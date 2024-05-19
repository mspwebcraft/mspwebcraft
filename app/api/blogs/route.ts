import dbConnect from "@/server/connectdb";
import Blog from "@/server/models/blog.model";
import slugify from "@/utils/slugify";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export async function GET(request: NextRequest) {
  const blogs = await Blog.find()
    .populate({
      path: "author",
      select: "name designation image",
    })
    .lean();
  return NextResponse.json(blogs);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const slug = slugify(body.title);
  const isBlogExists = await Blog.findOne({ slug });
  if (isBlogExists) {
    return NextResponse.json(
      {
        message:
          "Blog is already exists with this title try to make a unique title",
        blog: isBlogExists,
      },
      { status: 409 }
    );
  }
  const blog = { ...body, slug };
  const newBlog = new Blog(blog);
  await newBlog.save();
  return NextResponse.json({
    message: "Blog is added Successfully",
    blog,
  });
}
