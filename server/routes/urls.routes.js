import express from "express";
import { accessUrl, shortUrl } from "../controllers/short.js";

const router = express.Router();


router.use(express.static(process.cwd() + '/client/build'))
console.log(process.cwd())

router.get("/", (req, res) => {
    res.sendFile(process.cwd() + '/client/build/index.html');
  });

router.post("/api", shortUrl);

router.get("/:url", accessUrl);

export default router;