const express = require('express')
const app = express()
const port = process.env.PORT||3000;
let appInsights = require("applicationinsights");
appInsights
  .setup("aa6fb425-d1c2-4fca-bd5a-5115b190f2b4")
  .start();

app.set("view engine", "jade");

app.get('/', (req, res) => {
  res.render("index");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})