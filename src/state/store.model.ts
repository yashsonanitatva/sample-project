export interface IState {
	auth: {
		token: string;
		loggedIn: string;
	},
	user: {
		list: any;
	}
}