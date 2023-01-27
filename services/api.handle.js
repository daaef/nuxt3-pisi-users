/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

// Class to handle api calls
export class Handler {
    // Method created to handle every api call pass to it as a function
    handle(fn, payload) {
        // if resolved, data is returned and if rejected and error message is returned
        return new Promise((resolve, reject) => {
            fn(payload)
                .then((response) => {
                    console.log('response handler',response)
                    // returns a promise that is resolved, if response.success is true and there is no error message
                    if (response.success) {
                        return resolve(response.data)
                    }
                    // rejects the promise if there is an error message.
                    return reject(response.msg)
                })
                .catch((error) => {
                    console.log('error handler',error)
                    if (error.response.status !== 404) {
                        return reject(error.response.data.error_message.error)
                    }
                    return reject(error.response.data)
                })
        })
    }
}
