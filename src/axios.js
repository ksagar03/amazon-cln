import axios from "axios";
// axios->  axios is a fetching librery which is used for Get,post request 
const instance= axios.create({
    baseURL:"https://us-central1-clone-6f9dc.cloudfunctions.net/api"  // here we will be having a api(i.e cloud function (firebase)) url 
})

export default instance