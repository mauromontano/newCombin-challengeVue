export function updateMembers(state, data) {
  state.members = data;
}

export function addMember(state, data) {
  state.members.push(data);
}
