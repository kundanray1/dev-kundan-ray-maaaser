import axios from "axios";
import {SIGNUP_URL,LOGIN_URL} from './../constants/URL'

export class AuthAPI {
  signupUser = async (authData) => {
  	console.log('signupUser',authData)
    try {
      const response = await axios.post(SIGNUP_URL,authData);
      return response.data
    } catch (error) {
      console.log(error);
    }
  };
   loginUser = async ({identifier,password}) => {
    try {
      const response = await axios.post(LOGIN_URL,{identifier,password});
      return response.data
    } catch (error) {
      console.log(error);
    }
  };
   logoutUser = async () => {
  	console.log('logoutUser')
  };
}
