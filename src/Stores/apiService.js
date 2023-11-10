import axios, { api } from "src/boot/axios";

class ApiService {
  static async authentication(params?: any){
    try {
      const response = await axios.post('/user/login', params);
      if(response.status === 200){
        localStorage.setItem('accessToken', response.data.accessToken);
        console.log(localStorage.getItem('accesstoken'))
      }
    }
  }
}
