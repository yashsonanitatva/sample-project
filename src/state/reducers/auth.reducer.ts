import ACTION from "@state/actions/action.types";

const initialize = {
	token: "",
	loggedIn: false,
};

const AuthReducer = (state = initialize, action: any) => {
	switch (action.type) {
		case ACTION.SET_TOKEN:
			return { ...state, token: action.payLoad };
		case ACTION.SET_LOGGED_IN:
			return { ...state, loggedIn: action.payLoad };
		default:
			return state;
	}
}

export default AuthReducer;
