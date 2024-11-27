// import { useDispatch } from "react-redux";
import { loginInterface, otpInterface, signupInterface } from "../interfaces/interfaces";
import { useMutation } from "@tanstack/react-query";
import { api } from "../apis/apies";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {setDoctor,setDoctorType,setToken,setLoading} from "../Slices/userSlice"

// export const userLogin = (data: any, callback: any) => {
//     return (dispatch: any) => {
//         dispatch(handleLoading(true));
//         ApiClient.post(`${apiUrl}${PORT}${version}/admin/login`, data).then(
//             (response: any) => {
//                 if (response.status === 200 || response.status === 201) {
//                     dispatch(loginSuccess(response));
//                     setAccessToken(response?.token);
//                     if (response?.token) {
//                         setAuthorizationToken(axios, response?.token);
//                         sessionStorage.setItem('token', response?.token)
//                     }
//                     dispatch(handleLoading(false));
//                     return callback(response);
//                 } else if (response.status === 404) {
//                     openNotificationWithIcon('error', response.message);
//                     dispatch(handleLoading(false));
//                     // return callback(response);
//                 } else {
//                     openNotificationWithIcon('error', response.message);
//                     dispatch(handleLoading(false));
//                 }
//             }
//         );
//     };
// };
 

//custom hooks for signUp
export const useSingUp = () =>{
    const navigate = useNavigate()
    // const dispatch = useDispatch();

    return useMutation({
        mutationKey: ['signup'],
        mutationFn: async (data: signupInterface) => {
            const  response = await axios.post(api.doctorSignUpUrl, data);
            return response.data;
        },

        onSuccess:(response) => {
            toast.info("Registeration will be done after  verification of your email")
            navigate("/otpVarify",{
                state:{email:response.data.email}
            })
        },

        onError:(err) =>{
            toast.error(err.message)

        }
    })
}

export const useLogin = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return  useMutation({
        mutationKey: ['login'],
        mutationFn: async (data: loginInterface) => {
            dispatch(setLoading(true));
            const  response = await axios.post(api.doctorLoginUrl, data);
            return response.data;
        },
        onSuccess:(response) =>{
            console.log(response.data)
            dispatch(setDoctorType(response?.data.doctor.doctorType));
            dispatch(setDoctor(response.data.doctor))
            dispatch(setLoading(false))
            dispatch(setToken(response.data.token))
            toast.success(response.message)
            navigate("/dashboard") 

        },
        onError:(err) =>{
            toast.error(err.message);
            dispatch(setLoading(false));

        }
    })
}

export const useOtpVerify = () =>{
    const navigate = useNavigate()
    const dispatch  = useDispatch();

    return useMutation({
        mutationKey: ['otpVerify'],
        mutationFn: async (data: otpInterface) => {
            dispatch(setLoading(true))
            const response = await axios.post(api.otpVerifyUrl, data);
            return response.data;
        },
        onSuccess:(response) =>{
            dispatch(setLoading(false))
            toast.success(response.message)
            navigate("/login")
        },
        onError:(err) =>{
            toast.error(err.message);
            dispatch(setLoading(false));
        }
    })
}