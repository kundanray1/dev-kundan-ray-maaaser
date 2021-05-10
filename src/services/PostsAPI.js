import axios from "axios";
import {GET_POSTS_URL} from './../constants/URL'
export class PostsAPI {
  fetchPosts = async () => {
    try {
      const response = await axios.get(GET_POSTS_URL);
      return response.data
    } catch (error) {
      console.log(error);
    }
  };
}
