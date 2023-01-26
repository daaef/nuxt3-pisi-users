export default ($fetch, config) => ({

    //Sign Up
    register(payload) {
        return $fetch.$post(`${config.public.api_url}/auth/sign-up`, {
            body: payload.data
        })
    },

    //Verify Email with OTP
    verifyEmail(payload) {
        return $fetch.$get(`${config.public.api_url}/auth/verify-email/${payload}`)
    },

    //Verify OTP
    verifyOTP(payload) {
        return $fetch.$get(`${config.public.api_url}/auth/verify-otp/${payload}`)
    },

    //Resend OTP
    resendOTP(payload) {
        return $fetch.$post(`${config.public.api_url}/auth/resend-otp/`, {
            body: payload.data
        })
    },

    //Enable 2FA Authentication
    enable2fa(payload) {
        return $fetch.$post(`${config.public.api_url}/auth/enable-two-factor-auth/`, {
            headers: payload.headers,
            body: payload.data
        })
    },

    //Verify Authentication App Token
    verifyAppToken(payload) {
        return $fetch.$post(`${config.public.api_url}/auth/verify-app-token/`, {
            headers: payload.headers,
            body: payload.data
        })
    },

    //Initiate Password Reset
    initPasswordReset(payload) {
        return $fetch.$post(`${config.public.api_url}/auth/init-password-reset`, {
            body: payload.data
        })
    },

    //Complete Password Reset
    completePasswordReset(payload) {
        return $fetch.$post(`${config.public.api_url}/auth/complete-password-reset`, {
            body: payload.data
        })
    },
})