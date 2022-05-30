
import { composeWithDevTools } from "@redux-devtools/extension"
import { createStore, applyMiddleware } from "redux"
import reducers from "store/reducers"
import { subscribe } from "store/subscriber"
import thunk from "redux-thunk"

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

subscribe(store)
