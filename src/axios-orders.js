import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-2cbec.firebaseio.com/',
});

export default instance;
