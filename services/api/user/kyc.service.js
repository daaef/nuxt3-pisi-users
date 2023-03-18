export default ($fetch, config) => ({
    //Upload ID
    uploadID(payload) {
        return $fetch.$post(`${config.public.api_url}/user/upload-id`, {
            headers: payload.headers,
            body: payload.data
        })
    },

    //Upload ID
    uploadIDUrl(payload) {
        return $fetch.$post(`${config.public.api_url}/kyc/update-id-url/`, {
            headers: payload.headers,
            body: payload.data
        })
    },

    //Upload Selfie
    uploadSelfie(payload) {
        console.log('uploading selfie', payload.data)
        return $fetch.$post(`${config.public.api_url}/user/upload-selfie`, {
            headers: payload.headers,
            body: payload.data
        })
    },

    //Upload Selfie
    uploadSelfieUrl(payload) {
        console.log('uploading selfie', payload.data)
        return $fetch.$post(`${config.public.api_url}/kyc/update-selfie-image-url/`, {
            headers: payload.headers,
            body: payload.data
        })
    },

    //Upload Utility Bill
    uploadUtilityBill(payload) {
        return $fetch.$post(`${config.public.api_url}/user/upload-utility-bill`, {
            headers: payload.headers,
            body: payload.data
        })
    },
})