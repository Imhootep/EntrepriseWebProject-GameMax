import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:1337/users/';

class UserService {
  getAllUsers() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  uploadPost(formData) {

    return fetch(API_URL + 'upload', {
        method: "POST",
        body: formData
    });
    
    // return axios.post(API_URL + 'upload', formData, { headers:
    //   {
    //     'content-type':'multipart/form-data'
    //   } 
    // });
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();