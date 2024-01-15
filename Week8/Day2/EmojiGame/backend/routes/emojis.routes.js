import express from "express";
import { getAllEmojis } from "../controllers/emojis.controller.js";

const emojiRouter = express.Router();

emojiRouter.get("/emojis", getAllEmojis);

export { emojiRouter };
