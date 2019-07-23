import axios from 'axios';
import {baseUrl} from './apiUtils';

const apiBaseUrl = `${baseUrl}/tasks`;

export default function getTasks() {
  axios.get(apiBaseUrl)
    .then(response => response.data);
}
