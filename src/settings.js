import axios from 'axios';

let DEBUG = true;
let HOST_URL = "";
if (DEBUG) {
  HOST_URL = "http://127.0.0.1:8000";
}

export const instance = axios.create({
    baseURL: `${HOST_URL}/api`,
    headers:{
        "Content-Type":"application/json"
    }
});

export const postsURL =`${HOST_URL}/api/posts/`
export const executivesURL =`${HOST_URL}/api/executives/`
export const pastQuestionsURL =`${HOST_URL}/api/past-questions/`
export const placementsURL =`${HOST_URL}/api/past-placements/`
export const contactURL =`${HOST_URL}/api/contact/`

export default HOST_URL;