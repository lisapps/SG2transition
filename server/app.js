var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
// const dotenv = require("dotenv");
const proxy = require("http-proxy-middleware").createProxyMiddleware;
const Bundler = require("parcel-bundler");
var cors = require("cors");

const bundler = new Bundler("../client/src/index.html");
var app = express();

// ~~~~~~~~~~~~~~~~~~~~~
// ### CONFIGURATION ###

app.use(logger("dev"));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(express.static(path.join(__dirname, "public/static")));
app.use(cors());
app.options("*", cors());

//run parcel on dev
app.use(
  "/api",
  proxy({
    target: process.env.API_SERVER || "http://localhost:3003/",
  }),
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));

// -- DEFINE ROUTES
const index = require("./routes/index");
app.use("/", index);

// catch 404 and use error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", "frame-src 'self' https://via.placeholder.com");
  return next();
});

// cors settings for dev and production
var allowedOrigins = [
  "http://localhost:3003",
  "http://localhost:1234",
  "https://www.kingstonloda.com/",
];
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " + "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  // send the error
  res.send({
    message: err.message,
    error: err,
  });
  return;
});

// -- images
// var fpoRoute = require(path.join(__dirname, "/routes/fpo.route"));
// app.use("/fpo", fpoRoute);

// -- icons
// var iconsRoute = require(path.join(__dirname, "/routes/icons.route"));
// app.use("/icons", iconsRoute);

module.exports = app;
