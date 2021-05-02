import React from "react"
import { render } from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { createClientStore } from "./store/index"

render(
  <Provider store={createClientStore()}>
    <App />
  </Provider>,
  document.querySelector("#app")
)
