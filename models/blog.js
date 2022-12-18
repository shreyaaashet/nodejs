const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const blogSchema= new Schema(
{   // defines the structure of blogSchema
  title:{
    type:String,
    required:true
  },
  snippet:{
    type:String,
    required:true
  },
   body:{
    type:String,
    required:true
  }
},// option timestamp prop to automatically add created at and updated at prop
{ timestamps: true }
)

//model surrounds the schema and provides us an interface to communicate


const Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog;