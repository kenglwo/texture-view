// import express from "express";
import { NextFunction, Request, Response } from "express";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs-extra";
import rfs from "rotating-file-stream";
import indexRouter from "./routes/index";
import wordcloud2 from "./routes/wordcloud2";
import noresultRouter from "./routes/noresult";
import compareRouter from "./routes/compare";
import overviewRouter from "./routes/overview";
import recipeInfoRouter from "./routes/api/recipe-info";
import textureRouter from "./routes/api/texture";
import textureCategoryRouter from "./routes/api/texture_category";
import textureCategoryArrayRouter from "./routes/api/texture_category_array";
// visualizeRouter = require("./routes/visualize");

import reactRouter from "./routes/router";

interface Error {
  status?: number;
  message?: string;
}

const SESSION_OPT = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 }
};

// let jquery = require("express-jquery");
// let ajax = require('./routes/ajax');

const app = express();

// view engine setup process
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(nocache())

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(session(SESSION_OPT));
// app.use(jquery("/jquery"));
// app.use('/ajax', ajax);

app.use("/", indexRouter);
app.use("/noresult", noresultRouter);
app.use("/wordcloud2", wordcloud2);
app.use("/compare", compareRouter);
app.use("/overview", overviewRouter);
// app.use("/visualize", visualizeRouter);
app.use("/router", reactRouter);
app.use("/api/recipe-info", recipeInfoRouter);
app.use("/api/texture", textureRouter);
app.use("/api/texture_category", textureCategoryRouter);
app.use("/api/texture_category_array", textureCategoryArrayRouter);

// keep track of access log
// const logDirectory = path.join(__dirname, "./log");
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// const accessLogStream = rfs("access.log", {
//   size: "10MB",
//   interval: "10d",
//   compress: "gzip",
//   path: logDirectory
// });
// const preformat = ":date[clf] - :method :url - :response-time ms";
// app.use(
//   logger(preformat, {
//     stream: accessLogStream
//   })
// );

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module.exports = app;
export default app;
