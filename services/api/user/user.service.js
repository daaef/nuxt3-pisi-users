export default ($fetch, config) => ({
    //Update User
    updateUser(payload) {
        return $fetch.$patch(`${config.public.api_url}/user/update`, {
            headers: payload.headers,
            body: payload.data
        })
    },

    //Add Bank
    addBank(payload) {
        return $fetch.$post(`${config.public.api_url}/user/add-bank-account`, {
            headers: payload.headers,
            body: payload.data
        })
    },
})