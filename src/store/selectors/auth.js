
export const selectUser = state => state.auth.user

export const selectToken = state => state.auth.token

export const selectAuthenticated = state => !!(selectUser(state) && selectToken(state))
