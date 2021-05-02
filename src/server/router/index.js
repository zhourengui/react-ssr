const Router = require("@koa/router")
const path = require("path")
const serverBundle = require("../../../dist/server.bundle").default
const { renderToString } = require("react-dom/server")
const fs = require("fs")

const router = new Router()

const template = fs.readFileSync(
  path.resolve(__dirname, "../../../dist/index.html"),
  "utf-8"
)

const handleTemplate = (template) => (props) =>
  template.replace(
    `<div id="app"></div>`,
    `<div id="app">${props.html}</div>${props.store}`
  )

module.exports = function (app) {
  router.get(["/", "/about"], async (ctx, next) => {
    const render = handleTemplate(template)
    const jsx = await serverBundle(ctx)
    const html = await renderToString(jsx)
    ctx.body = render({
      html,
      store: `<script>window.__REDUX_STATE__=${JSON.stringify(
        ctx.window
      )}</script>`,
    })
  })

  router.get("/mock", (ctx) => {
    ctx.status = 200
    ctx.body = {
      name: "zhourengui" + Math.random(),
      location: "guagnzhou" + Math.random(),
    }
  })

  app.use(router.routes()).use(router.allowedMethods())
}
