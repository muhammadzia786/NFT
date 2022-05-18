var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// hamza
const cors = require("cors");
const mongoose = require("mongoose");
// hamza
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");

var app = express();
// hamza
const LandingRouterFile = require("./routes/landingPage");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// hamza
mongoose
  .connect(
    "mongodb+srv://hamza:11223344@nft.9pt25.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    // 'mongodb//localhost:27017/Pickanddrop',
    // "mongodb+srv://uddipan:uddipan123@clusteru-stdcj.mongodb.net/pickndrop?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => console.log("Connected to MongoDb"))
  .catch((err) => console.log("MongoDb connection Error", err));
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// hamza

app.use("/LandingPage", LandingRouterFile);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
