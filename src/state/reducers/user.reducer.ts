import ACTION from "@state/actions/action.types";

const initialize = {
	list: [],
};

const UserReducer = (state = initialize, action: any) => {
	switch (action.type) {
		case ACTION.SET_USER_LIST:
			return { ...state, list: action.payLoad };
		default:
			return state;
	}
}

export default UserReducer;
