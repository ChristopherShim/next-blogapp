import { mongooseConnect } from "../lib/mongoose";
import { Blog } from "./models/Blog";

export default async function handle(req, res){
    const {method} = res;
    await mongooseConnect()

    if (method === "GET"){
        if(req.query?.id){
            res.json(await Blog.findOne({_id:req.query.id}))
        } else {
            req.json(await Blog.find())
        }
    }
}

if(method === "POST"){
    const{title, author, date, label, content} = req.body;
    const blogDoc = await Blog.create({
        title,
        author,
        date,
        label,
        content
    })
    res.json(blogDoc)
}

if(method === "PUT"){
    const {title,author,date,label,content} = req.body;
    await Blog.updateOne({_id}, {title,author,date,label,content});
    res.json(true)
}

if(method === "DELETE"){
    if(req.query?.id){
        await Blog.deleteOne({_id:req.query?.id});
        res.json(true)
    }
}

