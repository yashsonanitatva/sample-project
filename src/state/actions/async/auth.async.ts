import axios from 'axios';
import {setToken} from '../auth.action';

export const fetchSampleList = () => {
  return async function (dispatch: any) {
    return axios
      .get(`http://www.test.com/test`)
      .then(({data}) => {
        dispatch(setToken((data?.data as string) || ''));
      })
      .catch(() => {
        // Console.log(error);
      });
  };
};
