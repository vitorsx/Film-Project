import express from "express";
import cors from "cors";
import "dotenv/config";
import userController from "./controller/userController.js";
import filmeController from "./controller/filmeController.js";

const router = express();
router.use(express.json());
router.use(cors());

//endpoints configs
router.use(userController);
router.use(filmeController);

router.listen(process.env.PORT, () => console.log("API online on PORT", process.env.PORT));
