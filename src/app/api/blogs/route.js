import { mongooseConnect } from "@/app/lib/mongoose";
import { Blog } from "../models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  await mongooseConnect();
  const { title, author, label, date, content } = await req.json();
  // const body = await req.json()
  const blogDoc = await Blog.create({
    title,
    author,
    label,
    date,
    content,
  });
  console.log(blogDoc);

  return new Response("OK");
}

export async function GET() {
  const blogs = await fetch("/api/blogs", {
    headers: {
      "Content-Type": "application/json",
      "API-Key":process.env.MONGODB_URI
    }
  });
  const data = await blogs.json();
  return NextResponse.json(data);
}