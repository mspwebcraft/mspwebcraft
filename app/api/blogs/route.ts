import dbConnect from "@/server/connectdb";
import Blog from "@/server/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

dbConnect()
export async function GET(request: NextRequest) {
  const blogs = await Blog.find();
  return NextResponse.json(blogs);
}
