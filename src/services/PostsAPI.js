import axios from "axios";
import {NOTIFICATIONS_URL} from './../constants/URL'
export class PostsAPI {
  getPosts = async () => {
    try {
      const response = await axios.get(NOTIFICATIONS_URL);
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
  addPost = async (data) => {
    try {
      const response = await axios.post(NOTIFICATIONS_URL,data);
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
}
