"use strict";

const express = require("express");

const PORT = 8000;
const HOST = "0.0.0.0";

const app = express();
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get("/", (req, res) => {
  res.send(
    "<strong>MUHAMMAD SYAMAN</strong></br> Membuat Web Server di nodeJS, Nginx, dan Apache2 dan melimitasi request masuk untuk web server Nginx"
  );
});

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/
app.get("/me", (req, res) => {
  res.send(
    '<a href="https://www.dicoding.com/users/mhsyaman/" target="_blank">mhsyaman</a>'
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
