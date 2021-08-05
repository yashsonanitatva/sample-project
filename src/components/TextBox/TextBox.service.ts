import environment from "@lib/environment";
import axios from "axios";

export const getData = async () => {
  const result = await axios.get(
    `${environment.apiServer}/v1/account/1/cis/people/1`
  );
  return result;
};
