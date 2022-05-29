import express from "express";
import cors from "cors";
import "dotenv/config";
import { connection } from "./repository/connection.js";

const router = express();
router.use(express.json());
router.use(cors());



router.listen(process.env.PORT, () => console.log("API online on PORT", process.env.PORT));
