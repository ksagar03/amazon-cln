import axios from "axios";
// axios->  axios is a fetching librery which is used for Get,post request 
const instance= axios.create({
    baseURL:"..."  // here we will be having a api(i.e cloud function (firebase)) url 
})

export default instance