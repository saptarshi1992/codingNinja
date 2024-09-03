// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req,res) => {
  // Write your code here
  res.render("addBlogForm", { blogs: blogs });
};
export const renderBlogForm = () => {
  // Write your code here
};
export const addBlog = () => {
  // Write your code here
};
