/**
 * Author: Afekhide Gbadamosi
 * Date: 4th December 2021
 **/

// Class to handle api calls
export class Handler {
    // Method created to handle every api call pass to it as a function
    handle(fn, payload) {
        console.log('passed data to handler is', payload)
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
                    console.dir(error)
                    if (error?.response?.status === 403){
                        console.log(error?.data?.msg)
                        return reject(error?.data?.msg)
                    }
                    else if (error?.response?.status !== 404) {
                        console.log(error?.data?.message)
                        return reject(error?.data?.message)
                    }
                    return reject(error?.data)
                })
        })
    }
}
