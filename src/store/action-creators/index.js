
import axios from "axios"

export const setUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER", payload: user })
  }
}

export const setToken = (token) => {
  return (dispatch) => {
    dispatch({ type: "SET_TOKEN", payload: token })
  }
}

export const signIn = (credentials) => {
  return async (dispatch) => {
    return await axios.post("auth/signin", credentials)
  }
}

export const attempt = (token) => {

  return async (dispatch) => {

    console.log("attempt !")

    dispatch({ type: "SET_TOKEN", payload: token })
    if (!token) return

    await axios.get("auth/me")
      .then((response) => {
        dispatch({ type: "SET_USER", payload: response.data.user })
      })
      .catch(() => {
        dispatch({ type: "SET_USER", payload: null })
        dispatch({ type: "SET_TOKEN", payload: null })
      })
  }
}
