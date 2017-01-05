var express = require("express");
var app = express();

if (process.env.NODE_ENV === 'dev') {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");

  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(err);
    }
  })
}

// set dist path
app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// listen port
app.listen(process.env.PORT || 8080, () => {
  console.log('Port Server is ', process.env.PORT || 8080);
});