import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import connect from "./database/mongo.js";
const port = process.env.PORT || 5000;
dotenv.config();

connect();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
