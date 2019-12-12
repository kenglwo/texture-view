import express from "express";
import { NextFunction, Request, Response } from "express";
import path from "path";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("router", {
    title: "React.js"
  });
  // res.sendFile("../router.html", { root: path.join(__dirname, "src") });
  // res.sendFile("../router.html", { root: __dirname });
});

// module.exports = router;
export default router;
