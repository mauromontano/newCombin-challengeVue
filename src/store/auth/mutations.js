export function signIn(state, data) {
  state.signedIn = true;
  state.token = data.token;
}

export function sessionExpired(state) {
  state.signedIn = false;
  state.token = null;
}
