import express from "express";
import cors from "cors"; // CORS -Cross-origin resource sharing
import connectDB from "./config/db.js";

// app config
const app = express();
const PORT = 4000;

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();

app.get("/", (req, res) => {
  res.send("API Working!");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost/${PORT}`);
});

// mongodb+srv://sanmitsuthar:9409531985@cluster0.los9g.mongodb.net/?