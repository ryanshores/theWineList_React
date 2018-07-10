const express = require("express")
const next = require("next")

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production"
const app = next({dev})
const handle = app.getRequestHandler()

const wineRoutes = require("./routes/wines")

app.prepare()
.then(() => {
  const server = express()

  server.get("/p/:id", (req, res) => {
    const actualPage = "/post"
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get("*", (req, res) => {
    return handle(req, res)
  })

  server.use("/wines", wineRoutes)

  server.listen(port, (err) => {
    if(err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.log(ex.stack)
  process.exit(1)
})
