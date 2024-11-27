const BASE_URL =import.meta.env.VITE_DATEBASE_URL

export const api = {
    doctorSignUpUrl: BASE_URL+"/doctor/signup",
    doctorLoginUrl:  BASE_URL+"/doctor/login",
    otpVerifyUrl:BASE_URL+"/doctor/otpVarify"
}