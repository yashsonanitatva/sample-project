import axios from 'axios';
import { setToken } from '../auth.action';

export const fetchSampleList = () => {
	return function (dispatch: any) {
		return axios
			.get(`http://www.test.com/test`)
			.then(({ data }) => {
				dispatch(setToken(data?.data || []));
			})
			.catch((err) => {
				console.log(err);
			});
	};
}