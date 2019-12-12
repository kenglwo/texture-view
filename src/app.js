const express = require("express"),
  createError = require("http-errors"),
  logger = require("morgan"),
  session = require("express-session"),
  bodyParser = require("body-parser"),
  path = require("path"),
  fs = require("fs-extra"),
  rfs = require("rotating-file-stream"),
  indexRouter = require("./routes/index"),
  wordcloud2 = require("./routes/wordcloud2"),
  noresultRouter = require("./routes/noresult"),
  compareRouter = require("./routes/compare"),
  overviewRouter = require("./routes/overview"),
  recipeInfoRouter = require("./routes/api/recipe-info"),
  textureRouter = require("./routes/api/texture");
textureCategoryRouter = require("./routes/api/texture_category");
// visualizeRouter = require("./routes/visualize");

const reactRouter = require("./routes/react-index");

let session_opt = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 1000 }
};

let jquery = require("express-jquery");
// let ajax = require('./routes/ajax');

let app = express();

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
app.use(session(session_opt));
app.use(jquery("/jquery"));
// app.use('/ajax', ajax);

app.use("/", indexRouter);
app.use("/noresult", noresultRouter);
app.use("/wordcloud2", wordcloud2);
app.use("/compare", compareRouter);
app.use("/overview", overviewRouter);
// app.use("/visualize", visualizeRouter);
app.use("/react-index", reactRouter);
app.use("/api/recipe-info", recipeInfoRouter);
app.use("/api/texture", textureRouter);
app.use("/api/texture_category", textureCategoryRouter);

//keep track of access log
let logDirectory = path.join(__dirname, "./log");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
let accessLogStream = rfs("access.log", {
  size: "10MB",
  interval: "10d",
  compress: "gzip",
  path: logDirectory
});
let preformat = ":date[clf] - :method :url - :response-time ms";
app.use(
  logger(preformat, {
    stream: accessLogStream
  })
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
