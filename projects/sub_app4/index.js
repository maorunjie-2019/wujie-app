const express = require("express");
const app = express();
const port = 3095;

const allowOrigins = ["http://localhost:3090", "http://localhost:8080"];

app.all("*", function (req, res, next) {
  if (allowOrigins.includes(req.header("origin"))) {
    res.header("Access-Control-Allow-Origin", req.header("origin"));
  }
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "*");
  //允许携带cookie
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/app4", express.static("./dist"));

app.get("/", (req, res) => {
  //   res.header("set-cookie", "token=888;max-age:0;domain=localhost:3090");
  res.send({
    data: {
      msg: "你好，我是expresss123",
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
