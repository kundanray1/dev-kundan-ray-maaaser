import {
    APIHeaders,
    APIHeadersForMultipartFormData,
    ProtoHeaders,
} from "./../constants/APIHeader";
import LocalDb from "./LocalStorage";

export class API {
    static token = null;
    static user = null;

    constructor() {
        API.token = null;
        API.user = null;
        this.setToken();
    }

    setToken() {
        LocalDb.getSessions().then((response) => {
            if (response !== null) {
                API.token = response.loginresponse.token;
                API.user = response.loginresponse.loginaccount.client;
            }
        }).catch(err => {
            console.log("Error while getting session.", err);
        });
    }

    removeTokens() {
        LocalDb.removeSession((resolve,reject)=>{
            if(resolve){
                return resolve
            }else{
                return reject
            }
        })
    }

    resetToken() {
        console.log("resetToken()")
        this.removeTokens();
        this.setToken();
    }

    processResponse(response, callback) {
        response
            .json()
            .then((parsedResponse) => {
                if (parsedResponse.error) {
                    const error = {
                        error: true,
                        msg: parsedResponse.msg,
                        errorCode: parsedResponse.errorCode,
                    };
                    callback(null, error);
                } else {
                    callback(parsedResponse, null);
                }
            })
            .catch(() => {
                callback(null, "Exception on server");
            });
    }

    token() {
        return API.token;
    }
    user() {
        return API.user;
    }
    headers() {
        return { ...APIHeaders };
    }
    protoHeaders() {
        return { ...ProtoHeaders };
    }
    authHeaders() {
        return { ...APIHeaders, Authorization: API.token };
    }
    authProtoHeader() {
        return { ...ProtoHeaders, Authorization: API.token };
    }
    authHeadersForMultipartFormData() {
        return { ...APIHeadersForMultipartFormData, Authorization: API.token };
    }
}

export default new API();
