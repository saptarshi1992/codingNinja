import express from "express";
import { renderUpdateForm, updateUser } from "./user.controller.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", renderUpdateForm);
app.post("/", updateUser);
app.listen(5000, () => {
    console.log('Server is running on port 3000');
  });
  
export default app;
