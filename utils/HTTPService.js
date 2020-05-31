import axios from "axios";
import cookie from 'js-cookie';

export class HTTPService {

  static axios({ url = null, body = null, method = 'get', params = {}, token = cookie.get('token') }) {

    const apiURL = process.env.API_URL;
    
    return axios({
      baseURL: apiURL,
      method: method,
      url: url,
      data: body,
      params: params,
      headers: {"Authorization": `Bearer ${token}`}
    }).then( response => {
      return response.data
    })
    .catch(error => {
      if(error.response) {
        return error.response.data
      }
      const errorMessage = {
        success: false,
        message: 'Error: Network Error',
        error: error
      }
      console.error(error);
      return errorMessage
    });

  }
}