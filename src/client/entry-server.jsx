import React from "react"
import { Routes, routes } from "./router/index"
import { StaticRouter as Router } from "react-router-dom"

import { Provider } from "react-redux"
import { createServerStore } from "./store/index"

/**
 * ctx koa上下文
 */
export default (ctx) =>
  new Promise(async (resolve) => {
    const promies = []
    routes.forEach((route) => {
      if (route.path === ctx.req.url && route.loadData) {
        console.error("匹配到的route", route)
        promies.push(route.loadData())
      }
    })
    const res = await Promise.all(promies)
    ctx.window = res[0]
    resolve(
      <Provider store={createServerStore()}>
        <Router location={ctx.req.url}>{Routes()}</Router>
      </Provider>
    )
  })
