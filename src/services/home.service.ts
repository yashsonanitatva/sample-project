import axios from 'axios';

export const getUserList = async () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};
