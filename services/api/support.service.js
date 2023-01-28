export default ($fetch, config) => ({
    //Send Message
    sendMessage(payload) {
        return $fetch.$post(`${config.public.api_url}/chat/send-message`, {
            headers: payload.headers,
            body: payload.data
        })
    },
})