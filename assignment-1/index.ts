
import express from "express";
const app = express();
import mongoose from"mongoose";
const port = 3000;
import authRoutes from"./routes/auth";
import todoRoutes from"./routes/todo";
import cors from"cors";

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

(async function mongooseDb(){
    try {
      await mongoose.connect('mongodb+srv://nasikh:nasikh@cluster0.2he6rz9.mongodb.net/?retryWrites=true&w=majority');
      console.log('connected to mongoDb')
    } catch (error) {
      console.log(error);
    }
})();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


