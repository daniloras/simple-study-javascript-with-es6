import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.gihub.com/users/${username}`)
      console.log(response);      
    } catch (error) {
      console.warn('Error API');
    }
  }
}

Api.getUserInfo('daniloras');