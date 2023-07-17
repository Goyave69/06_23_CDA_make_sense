import axios from "axios";

const ApiHelper = async (
  route,
  method,
  data = null,
  format = "application/json"
) => {
  return axios({
    method,
    url: `http://localhost:6001/${route}`,
    data,
    headers: {
      "content-type": format,
      Accept: "application/json",
    },
    withCredentials: true,
  });
};

export default ApiHelper;
