const app = require("express")();

app.get("/", (req, res) => {
  console.log(req)
  res.send("hello from the server ....")
})

const port = process.env.PORT || 8000

app.listen(port, console.log("server started on port 8000"))