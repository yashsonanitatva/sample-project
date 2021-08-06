import axios from 'axios';

export const getUserList = () => {
	return axios.get('https://jsonplaceholder.typicode.com/users');
};
