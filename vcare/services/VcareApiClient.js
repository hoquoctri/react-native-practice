import  axios from 'axios';
import httpconfig from './HttpConfig';

//ex: https://localhost:8080

const defaultURL = "https://jsonplaceholder.typicode.com/users";

const instance = axios.create({
    baseURL: defaultURL,
    timeout: httpconfig.TIME_OUT,
    //header: httpconfig.HEADER
});

const handleResponse = (response) => {
    if (response && response.data) {
        return response.data;
    } else {
        return;
    }
}
async function test(endpoint) {
    axios.get(endpoint).then(function (response) {
        // handle responses
        console.log("Response data: " + response.data);
        // return response.data;
        handleResponse(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function() {
        // always executed
    });
}

export default {
    test
}
