
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
  return async () => await axios.post("auth/signin", credentials)
}

export const signOut = () => {
  return async (dispatch) => {
    await axios.post("auth/signout")
    dispatch({ type: "SET_USER", payload: null })
    dispatch({ type: "SET_TOKEN", payload: null })
  }
}

export const attempt = (token) => {
  return async (dispatch) => {

    if (token) dispatch({ type: "SET_TOKEN", payload: token })
    else return

    return await axios.get("auth/me")
      .then((response) => {
        dispatch({ type: "SET_USER", payload: response.data.user })
        return response.data.user.username
      })
      .catch(() => {
        dispatch({ type: "SET_USER", payload: null })
        dispatch({ type: "SET_TOKEN", payload: null })
      })
  }
}
