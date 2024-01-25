import { mongooseConnect } from "@/app/lib/mongoose";
import { Blog } from "../models/Blog";
import { NextResponse } from "next/server";

export async function POST(req) {
    await mongooseConnect();
  const { title, author, label, content } = await req.json();
  // const body = await req.json()
  const blogDoc = await Blog.create({
    title,author,label,content
  })
  console.log(blogDoc)

  return new Response('OK')
  // const blogDoc = await Blog.create({
  //   title,
  //   author,
  //   label,
  //   content,
  // });
  // res.json(blogDoc);

  
}

// export default async function handle(req, res) {
//   const { method } = req;
//   await mongooseConnect();

//   if (method === "GET") {
//     if (req.query?.id) {
//       res.json(await Blog.findOne({ _id: req.query.id }));
//     } else {
//       req.json(await Blog.find());
//     }
//   }

//   if (method === "POST") {
//     const { title, author, label, content } = req.body;
//     const blogDoc = await Blog.create({
//       title,
//       author,
//       label,
//       content,
//     });
//     res.json(blogDoc);
//   }

//   if (method === "PUT") {
//     const { title, author, date, label, content } = req.body;
//     await Blog.updateOne({ _id }, { title, author, date, label, content });
//     res.json(true);
//   }

//   if (method === "DELETE") {
//     if (req.query?.id) {
//       await Blog.deleteOne({ _id: req.query?.id });
//       res.json(true);
//     }
//   }
// }
