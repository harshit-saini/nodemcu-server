const app = require("express")();

app.get("/", (req, res) => {
  console.log(req)
  res.send("hello from the server ....")
})

app.listen(8000, console.log("server started on port 8000"))