import axios from "axios";
import APIEndPoints,{SIGNUP_URL,LOGIN_URL,CREATE_NEW_PASSWORD_URL,FORGOT_PASSWORD_URL} from './../constants/APIConstants'
import { APIHeader } from './../constants/APIHeader';

export class AuthAPI{ 
  signUp = async (authData) => {
    // const data=authData.serializeBinary()
   try {
      const response = await axios.post(SIGNUP_URL,authData,APIHeader);
      return response.data
    } catch (error) {
      console.log('inside AuthAPI.signUp error',error);
    }
  };

  login = async (payload) => {
    // const data=payload.serializeBinary()
    try {
      const response = await axios.post(LOGIN_URL,payload,APIHeader);
      return response.data
    } catch (error) {
      return error;
    }
  };
  
  createNewPassword = async ({password}) => {
    // const data=payload.serializeBinary()
    try {
      const response = await axios.post(CREATE_NEW_PASSWORD_URL,{password});
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

  forgotPassword = async ({password}) => {
    // const data=payload.serializeBinary()
    try {
      const response = await axios.post(FORGOT_PASSWORD_URL,{password});
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

}
