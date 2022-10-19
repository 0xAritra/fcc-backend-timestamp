// index.js
// where your node app starts

// init project
var express = require("express")
var app = express()

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors")
const { json } = require("express")
app.use(cors({ optionsSuccessStatus: 200 })) // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html")
})

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" })
})
app.get("/api/", function (req, res) {
  const d = new Date()
  const json = { unix: Date.parse(d), utc: d.toUTCString() }
  res.json(json)
})

app.get("/api/:time", function (req, res) {
  const t = req.params.time
  const d = new Date(Number(t) ? Number(t) : t)
  const json =
    d == "Invalid Date"
      ? { error: "Invalid Date" }
      : { unix: Date.parse(d), utc: d.toUTCString() }
  res.json(json)
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port)
})
