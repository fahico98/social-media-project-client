
import axios from "axios"

export const subscribe = (store) => {
  store.subscribe(() => {

    let token = store.getState().auth.token

    if(token){
      axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null
      if (token) localStorage.setItem("token", token)
      else localStorage.removeItem("token")
    }
  })
}
