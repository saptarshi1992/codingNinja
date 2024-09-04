// Please don't change the pre-written code
// Import the necessary modules here
import { blogs } from "../models/blog.model.js";

export const renderBlogs = (req, res) => {
  // Write your code here
  //console.log(blogs);
  res.render("blogs", { blogs: blogs });

};
export const renderBlogForm = (req, res) => {
  res.render("addBlogForm", { blogs: blogs });
};
export const addBlog = (req, res) => {
  // Write your code here
  blogs.push(req.body);
  res.render("blogs", { blogs: blogs });
};
