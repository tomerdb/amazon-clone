import axios from "axios";


const instance = axios.create({
    baseURL: 'https://us-central1-clone-5a923.cloudfunctions.net/api'
    //http://localhost:5001/clone-5a923/us-central1/api
});

export default instance