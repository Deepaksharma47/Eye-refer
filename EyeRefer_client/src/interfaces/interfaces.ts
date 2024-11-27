import { ReactNode } from "react";
export interface iconBtn {
    text: string;
    onClick?: () => void;
    children?: ReactNode;     
    disabled?: boolean;       
    outline?: boolean;         
    customClasses?: string;    
    type?: "button" | "submit" | "reset";
}

export interface signupInterface{
    fname:string;
    lname: string;
    doctorType: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface  loginInterface{
    email:string;
    password:string;
}

export interface otpInterface{
    email:string,
    otp:string;
}