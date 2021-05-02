const Koa = require("koa")
const router = require("./router")
const path = require("path")
const static = require("koa-static")

const app = new Koa()
router(app)
app.use(static(path.resolve(__dirname, "../../dist")))

app.listen(8888)
