import axios from "axios";

const ApiHelper = async (
  route,
  method,
  data = null,
  format = "application/json",
  params = {}
) => {
  return axios({
    method,
    url: `http://localhost:6001/${route}`,
    data,
    params,
    headers: {
      "content-type": format,
      Accept: "application/json",
    },
    withCredentials: true,
  });
};

export default ApiHelper;
