import express from "express";
import { renderBlogForm, validateBlog } from "./blog.controller.js";
import path from "path";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", renderBlogForm);
app.post("/addblog", validateBlog);
// app.listen(3000, () => {
//     console.log("server is listening at port 3000");
//   });
export default app;
