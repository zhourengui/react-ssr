import React from "react"
import { Route, Switch } from "react-router-dom"
import About, { getData } from "../pages/About"
import Home from "../pages/Home"

export const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/about",
    exact: true,
    component: About,
    loadData: getData,
  },
]

export const Routes = () => (
  <Switch>
    {routes.map((route, index) => (
      <Route
        path={route.path}
        exact={route.exact}
        key={index}
        component={route.component}
      />
    ))}
  </Switch>
)
