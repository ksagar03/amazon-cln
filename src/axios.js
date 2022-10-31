import axios from "axios";
// axios->  axios is a fetching librery which is used for Get,post request 
const instance= axios.create({
    baseURL:"http://127.0.0.1:5001/clone-6f9dc/us-central1/api"  // here we will be having a api(i.e cloud function (firebase)) url 
})

export default instance