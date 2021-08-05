import axios from "axios";

export const getData = () => {
  return new Promise(async (resolve) => {
    const result = await axios.get(`/v1/account/1/cis/people/1`);
    resolve(result);
  });
};
