// import axios from "axios";
// import APIEndPoints, {
//   SIGNUP_URL,
//   LOGIN_URL,
//   CREATE_NEW_PASSWORD_URL,
//   FORGOT_PASSWORD_URL,
// } from "./../constants/APIConstants";
// import { APIHeader, ProtoHeaders } from "./../constants/APIHeader";

// export class AuthAPI {
//   signUp = async (serializedData) => {
//     try {
//       const response = await axios({
//       url: APIEndPoints.SIGNUP,
//       method: "POST",
//       headers: ProtoHeaders,
//       data: serializedData
//     });
//       console.log("response",response)
//       return response.data;
//     } catch (error) {
//       console.log("inside AuthAPI.signUp error", error);
//     }
//   };


//   login = async (credentials) => {
//     try {
//       const serializedData = credentials.serializeBinary();
//       const response = await axios.post(
//         APIEndPoints.LOGIN,
//         serializedData,
//         APIHeader
//       );
//       return response.data;
//     } catch (error) {
//       console.log("inside AuthAPI.login error", error);
//     }
//   };

//   changeUser = (loginResponse, callback) => {
//     LocalDb.setSession(loginResponse, (err) => {
//       if (null !== err) {
//         console.log("Error while setting session re ni tahs.", err);
//       } else {
//         API.resetToken();
//         callback(false);
//       }
//     });
//   };

//   onAddUser = (credentials, callback) => {
//     fetch(APIEndPoints.ADD_USER, {
//       method: "POST",
//       headers: API.authHeaders,
//       body: credentials.serializeBinary(),
//     })
//       .then((response) => {
//         API.processResponse(response, callback);
//       })
//       .catch((error) => {
//         console.log("Error in calling login api.", error);
//         callback(null, null);
//       });
//   };

//   onFetchAllUsers = (callback) => {
//     fetch(APIEndPoints.FETCH_ALL_USERS, {
//       method: "GET",
//       headers: API.authHeaders,
//       body: null,
//     })
//       .then((response) => {
//         API.processResponse(response, callback);
//       })
//       .catch((error) => {
//         callback(null, null);
//       });
//   };

//   onDeleteUser = (userId, callback) => {
//     const completeURL = APIEndPoints.DELETE_USER + userId;
//     fetch(completeURL, {
//       method: "DELETE",
//       headers: API.authHeaders,
//       body: null,
//     })
//       .then((response) => {
//         API.processResponse(response, callback);
//       })
//       .catch((error) => {
//         callback(null, null);
//       });
//   };

//   onPasswordReset = (credentials, callback) => {
//     fetch(APIEndPoints.PASSWORD_RESET, {
//       method: "PATCH",
//       headers: API.authHeaders,
//       body: credentials.serializeBinary(),
//     })
//       .then((response) => {
//         API.processResponse(response, callback);
//       })
//       .catch((error) => {
//         console.log("Error in calling password reset api.", error);
//         callback(null, null);
//       });
//   };

//   onPasswordResetByAdmin = (credentials, callback) => {
//     fetch(APIEndPoints.PASSWORD_RESET_ADMIN, {
//       method: "POST",
//       headers: API.authHeaders,
//       body: credentials.serializeBinary(),
//     })
//       .then((response) => {
//         API.processResponse(response, callback);
//       })
//       .catch((error) => {
//         console.log("Error in calling Reset password by admin api.", error);
//         callback(null, null);
//       });
//   };

//   logout = (callback) => {
//     fetch(APIEndPoints.LOGOUT, {
//       method: "GET",
//       headers: API.authHeaders,
//       body: null,
//     })
//       .then((response) => {
//         API.processResponse(response, callback);
//       })
//       .catch((error) => {
//         console.log("Error in calling login api.", error);
//         callback(null, null);
//       });
//   };

//   onRegister = (userInfo, callback) => {
//     return fetch(APIEndPoints.REGISTER, {
//       method: "POST",
//       headers: API.headers,
//       body: JSON.stringify(userInfo),
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((response) => {
//         console.log("res", response);
//         API.processResponse(response, callback);
//       })
//       .catch((error) => {
//         console.log("Error in calling register api.", error);
//         callback(null, null);
//       });
//   };

//   // signUp = async (authData) => {
//   //   // const data=authData.serializeBinary()
//   //   try {
//   //     const response = await axios.post(SIGNUP_URL, authData, APIHeader);
//   //     return response.data;
//   //   } catch (error) {
//   //     console.log("inside AuthAPI.signUp error", error);
//   //   }
//   // };

//   // login = async (payload) => {
//   //   // const data=payload.serializeBinary()
//   //   try {
//   //     const response = await axios.post(LOGIN_URL, payload, APIHeader);
//   //     return response.data;
//   //   } catch (error) {
//   //     return error;
//   //   }
//   // };

//   // createNewPassword = async ({ password }) => {
//   //   // const data=payload.serializeBinary()
//   //   try {
//   //     const response = await axios.post(CREATE_NEW_PASSWORD_URL, { password });
//   //     return response.data;
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // forgotPassword = async ({ password }) => {
//   //   // const data=payload.serializeBinary()
//   //   try {
//   //     const response = await axios.post(FORGOT_PASSWORD_URL, { password });
//   //     return response.data;
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // verification = async ({ password }) => {
//   //   // const data=payload.serializeBinary()
//   //   try {
//   //     const response = await axios.post(VERIFICATION_URL, { password });
//   //     return response.data;
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
// }
