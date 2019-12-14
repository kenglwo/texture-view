import express from "express";
import { NextFunction, Request, Response } from "express";
import path from "path";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("router", {
    title: "React.js"
  });
});

// module.exports = router;
export default router;
