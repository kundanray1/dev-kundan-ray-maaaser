import APIEndPoints from '../constants/APIConstants';
import API from "./API";
import LocalDb from "./LocalStorage"


class UserAPI extends API {
    constructor() {
        super()
    }
    onLogin = (credentials, callback) => {
        console.log(APIEndPoints.LOGIN)
        fetch(APIEndPoints.LOGIN, {
            method: 'POST',
            headers: this.headers,
            body: credentials.serializeBinary()
        }).then(response => {
            console.log("parsing response")
            this.processResponse(response, callback);

        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            // ADD THIS THROW error
            throw error;
        });
       
    };

    changeUser = (loginResponse, callback) => {
        LocalDb.setSession(loginResponse, (err) => {
            if (null !== err) {
                console.log("Error while setting session re ni tahs.", err);
            } else {
                this.resetToken()
                callback(false)
            }
        });
    };

    onAddUser = (credentials, callback) => {
        fetch(APIEndPoints.ADD_USER, {
            method: 'POST',
            headers: this.authHeaders,
            body: credentials.serializeBinary()
        }).then(response => {
            this.processResponse(response, callback);
        }).catch(error => {
            console.log("Error in calling login api.", error);
            callback(null, null);
        })
    };

    onFetchAllUsers = (callback) => {
        fetch(APIEndPoints.FETCH_ALL_USERS, {
            method: 'GET',
            headers: this.authHeaders,
            body: null
        }).then(response => {
            this.processResponse(response, callback);
        }).catch(error => {
            callback(null, null);
        })
    };

    onDeleteUser = (userId, callback) => {
        const completeURL = APIEndPoints.DELETE_USER + userId
        fetch(completeURL, {
            method: 'DELETE',
            headers: this.authHeaders,
            body: null
        }).then(response => {
            this.processResponse(response, callback);
        }).catch(error => {
            callback(null, null);
        })
    };

    onPasswordReset = (credentials, callback) => {
        fetch(APIEndPoints.PASSWORD_RESET, {
            method: 'PATCH',
            headers: this.authHeaders,
            body: credentials.serializeBinary()
        }).then(response => {
            this.processResponse(response, callback);
        }).catch(error => {
            console.log("Error in calling password reset api.", error);
            callback(null, null);
        })
    };

    onPasswordResetByAdmin = (credentials, callback) => {
        fetch(APIEndPoints.PASSWORD_RESET_ADMIN, {
            method: 'POST',
            headers: this.authHeaders,
            body: credentials.serializeBinary()
        }).then(response => {
            this.processResponse(response, callback);
        }).catch(error => {
            console.log("Error in calling Reset password by admin api.", error);
            callback(null, null);
        })
    };

    logout = (callback) => {
        fetch(APIEndPoints.LOGOUT, {
            method: 'GET',
            headers: this.authHeaders,
            body: null
        }).then(response => {
            this.processResponse(response, callback);
        }).catch(error => {
            console.log("Error in calling login api.", error);
            callback(null, null);
        })
    };
    

    onRegister = (userInfo, callback) => {
        return fetch(APIEndPoints.REGISTER, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(userInfo)
        })
            .then((res) => {
                return res.json()
            })
            .then(response => {
                console.log("res", response);
                this.processResponse(response, callback);
            })
            .catch(error => {
                console.log("Error in calling register api.", error);
                callback(null, null);
            })
    }



    
}

export default new UserAPI();