
import {decode as atob, encode as btoa} from 'base-64'

FileReader.prototype.readAsArrayBuffer = function (blob) {
    if (this.readyState === this.LOADING) throw new Error("InvalidStateError");
    this._setReadyState(this.LOADING);
    this._result = null;
    this._error = null; 
    const fr = new FileReader();
    fr.onloadend = () => {
        const content =  atob(fr.result.substr("data:application/octet-stream;base64,".length));
        const buffer = new ArrayBuffer(content.length);
        const view = new Uint8Array(buffer);
        view.set(Array.from(content).map(c => c.charCodeAt(0)));
        this._result = buffer;
        this._setReadyState(this.DONE);
    };
    fr.readAsDataURL(blob);
}


function parseJSON(response, callback) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  if (response.status === 400) {
    return response

      .json()

      .then((parsedResponse) => {
        if (parsedResponse.error) {
          const error = {
            error: true,

            msg: parsedResponse.msg,

            errorCode: parsedResponse.errorCode,
          };

          return error;
        }

        callback(parsedResponse, null);
      })

      .catch(() => {
        callback(null, "Exception on server");
      });
  }

  if (response.status === 200) {
    return response

      .json()

      .then((parsedResponse) => {
        if (parsedResponse.error) {
          const error = {
            error: true,

            msg: parsedResponse.msg,

            errorCode: parsedResponse.errorCode,
          };

          if (error.errorCode === "AUTH_ERROR") {
            // return LocalDb;.removeSession(), history.push('/login');
            // setTimeout(LocalDb.removeSession() && history.push('/login'),4000)
            // return error && LocalDb.removeSession(),history.push('/login')
            // return error && LocalDb.removeSession() && window.location.reload();
          }

          return error;
        }

        return parsedResponse;

        // callback(parsedResponse, null);
      })

      .catch(() => {
        callback(null, "Exception on server");
      });
  }

  return response.json();
}

/**

 * Checks if a network request came back fine, and throws an error if not

 *

 * @param {object} response A response from a network request

 *

 * @return {object|undefined} Returns either the response, or throws an error

 */

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 401) {
    if (window.location.pathname === "/login") {
      // do nothing
    } else {
      window.location.replace("/logout");
    }
  }

  const error = new Error();

  error.response = response;

  if (response.status === 400) {
    return response;
  }

  throw error;
}

/**

 * Requests a URL, returning a promise

 *

 * @param {string} url The URL we want to request

 * @param {object} [options] The options we want to pass to "fetch"

 *

 * @return {object} The response data

 */

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(() => checkStatus());
}

/**

 * Check response and convert to array buffer

 *

 * @param {object} response A response from a network request

 *

 * @return {object} The array buffer from the request

 */

function convertToArrayBuffer(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.arrayBuffer();
}
const convertToArrayInt = (data) => {
  return new Uint8Array(data)
};
// request proto


export function requestProto(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(convertToArrayBuffer)
    .then(convertToArrayInt);
}
