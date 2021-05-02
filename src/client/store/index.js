import { createStore } from "redux"

const initState = {
  name: "zhourengui",
  location: "baiejing",
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const createClientStore = () =>
  createStore(reducer, window.__REDUX_STATE__)

export const createServerStore = () => createStore(reducer)
