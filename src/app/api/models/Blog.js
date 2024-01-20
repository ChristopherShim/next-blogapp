const {Schema, model, models} = require("mongoose")

const BlogSchema = new Schema({
    title:{type:String, required: true},
    author: {type:String, required:true},
    date: {type: date, required:true},
    label: {type:String, required:true},
    content:{type:String,required:true}
}, {
    timestamps:true
})

export const Blog = models.Blog || model("Blog",BlogSchema)