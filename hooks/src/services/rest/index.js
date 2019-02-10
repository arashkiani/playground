import axios from "axios";
const baseURL = "https://api.themoviedb.org/3/";
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  params: {
    api_key: process.env.REACT_APP_api_key,
    language: "en-US"
  }
});

// Add a request interceptor
instance.interceptors.request.use(
  config =>
    // Do something before request is sent
    config,
  error =>
    // Do something with request error
    Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
  ({ data }) =>
    // Do something with response data
    data,
  error =>
    // Do something with response error
    Promise.reject(error)
);

/*
All API endpoints used in this application |>
*/
export const getList = () => instance.get("/movie/now_playing");
export const getPlaying = () => instance.get("/genre/movie/list");
