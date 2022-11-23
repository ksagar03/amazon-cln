import axios from "axios";
// axios->  axios is a fetching librery which is used for Get,post request
const instance = axios.create({
  // here we will be having a api(i.e cloud function (firebase)) url
  // baseURL: "https://us-central1-clone-6f9dc.cloudfunctions.net/api",
   // this is an actual end point url which will
  // connect the backend deployed in firbase
  baseURL: "http://127.0.0.1:5001/clone-6f9dc/us-central1/api", // this link is used for debuging purposes(simulation puspose)
});

export default instance;
//https://us-central1-clone-6f9dc.cloudfunctions.net/api
