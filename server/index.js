import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => console.log(`Server running on port: http://localhost:8800`));
