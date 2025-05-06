//import axios
import axios from 'axios';

const Api = axios.create({
  //set endpoint API
  baseURL: 'http://192.168.200.5:8080',
  //set header axios
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export default Api;

// //import axios
// import axios from 'axios';

// //import BACKEND_API_URL from .env file
// import { BACKEND_API_URL } from '@env';

// const Api = axios.create({
//   baseURL: BACKEND_API_URL,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// export default Api;