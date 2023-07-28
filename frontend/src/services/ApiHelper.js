import axios from "axios";

const ApiHelper = async (
  route,
  method,
  data = null,
  format = "application/json"
) => {
  return axios({
    method,
    url: `http://localhost:8888/${route}`,
    data,
    headers: {
      "content-type": format,
      Accept: "application/json",
    },
    withCredentials: true,
  });
};

export const deleteApiHelper = async (
  route,
  method,
  data = null,
  params = {}
) => {
  return axios({
    method,
    url: `http://localhost:8888/${route}`,
    data,
    params,
  });
};

export default ApiHelper;
