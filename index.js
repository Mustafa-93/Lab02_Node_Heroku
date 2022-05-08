const express = require("express");
const app = express();
const calculation = require("./calculation");

app.use(calculation);
app.get("/calc", (req, res) => {
  res.send(res.result.toString());
});

app.listen(process.env.PORT || 3000);
