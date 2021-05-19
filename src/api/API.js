import {APIHeader} from '../constants/APIHeader';
import LocalDb from "./LocalStorage";
import {decode as atob, encode as btoa} from 'base-64'
import base from "./../../../protos/account_rpc_pb";


// FileReader.prototype.readAsArrayBuffer = function (blob) {
//     if (this.readyState === this.LOADING) throw new Error("InvalidStateError");
//     this._setReadyState(this.LOADING);
//     this._result = null;
//     this._error = null; 
//     const fr = new FileReader();
//     fr.onloadend = () => {
//         const content =  atob(fr.result.substr("data:application/octet-stream;base64,".length));
//         const buffer = new ArrayBuffer(content.length);
//         const view = new Uint8Array(buffer);
//         view.set(Array.from(content).map(c => c.charCodeAt(0)));
//         this._result = buffer;
//         this._setReadyState(this.DONE);
//     };
//     fr.readAsDataURL(blob);
// }

export default class API{
    static token = null;
    static user = null;
    constructor() {
        API.token = null;
        API.user = null;
        this.setToken();
    }
    setToken() {
        LocalDb.getSession().then(response => {
            if (null !== response) {
                API.token = response.token;
                API.user = response.user;
            }
        }).catch(err => {
            console.log("Error while getting session.", err);
        });
    }
    removeTokens() {
        API.token = null;
        API.user = null;
    }
    resetToken() {
        this.removeTokens();
        this.setToken();
    }

    processResponse(response, callback) {
        response.arrayBuffer().then(function (b) {
            if (b) {
                const baseResponse = base.AccountBaseResponse.deserializeBinary(response).toObject();
                console.log("Inside processResponse::::",baseResponse)
                if (baseResponse.getError()) {
                    const errorReceived = { error: true, msg: baseResponse.getMsg() };
                    callback(null, errorReceived);
                } else {
                    callback(baseResponse, null);
                    console.log("Inside Process if")
                }
            } else {
                const error = { error: true, msg: "Error while parsing. ", };
                console.log("Inside Process else")
                callback(null, error);
            }
        })
    }

    getUser() {
        return API.user;
    }

    get headers() {
        return { ...APIHeader }
    }

    get authHeaders() {
        return { ...APIHeader, 'Authorization': API.token }
    }
}