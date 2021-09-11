import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:8081/api/",
    headers: {  'Content-Type': 'application/json'}
  });

  const httpClientMulti = axios.create({
    baseURL: "http://localhost:8081/api/",
    headers: {  'Content-Type':  'multipart/form-data'}
  });

const getAuthToken = () => `Bearer ${localStorage.getItem("jwt")}`;
const authInterceptor = (config) => {
  config.headers["Authorization"] = getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);
httpClientMulti.interceptors.request.use(authInterceptor);

export { httpClient, httpClientMulti };

//im initalizing axios which i will use to communicate wth the server and i passing the JWT for each request