import ACTION from "./action.types";

export const setUsers = (list) => ({
	type: ACTION.SET_USER_LIST,
	payLoad: list
});
