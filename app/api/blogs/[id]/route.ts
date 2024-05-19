import dbConnect from "@/server/connectdb";
import User from "@/server/models/auth.model";
import Blog from "@/server/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function PUT(request: NextRequest, { params }) {
  const id = params.id;
  const isBlogAvailable = await Blog.findById(id);
  if (!isBlogAvailable) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }
  const body = await request.json();
  const updatedBlog = await Blog.findByIdAndUpdate(id, body);

  return NextResponse.json({
    message: "Blog is updated successfully.",
    updatedBlog,
  });
}

export async function DELETE(_request: NextRequest, { params }) {
  const id = params.id;
  const deletedBlog = await Blog.findByIdAndDelete(id);
  if (deletedBlog) {
    return NextResponse.json({
      message: "Blog is deleted successfully.",
    });
  }
  return NextResponse.json(
    {
      message: "There is error on deleting blog, please try again",
    },
    { status: 400 }
  );
}
