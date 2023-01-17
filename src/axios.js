import axios from "axios";

const PROXY = "";

const instance=axios.create({
    baseURL:'http://127.0.0.1:5001/project-c00b2/us-central1/api'
});

export default instance;