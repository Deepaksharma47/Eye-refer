import { Formik, Form } from "formik"
import { useLocation } from "react-router-dom"
import { useOtpVerify } from "../../actions/user"
import InputFeild from "../../components/common/InputFeild"
import IconBtn from "../../components/common/IconBtn"
import { otpInterface } from "../../interfaces/interfaces"
import {  otpValidation } from "../../validations/signValidation"


const OtpVerify:React.FC = () => {
    const location = useLocation();
    const {email} = location.state || {};

    const loginMutation = useOtpVerify()
  return (
    <div className=" text-center w-[100%] p-10">
            <div className=" text-textColor font-sans font-medium text-4xl mb-8">Log In</div>
            <div className=" border p-9 rounded-md bg-white flex flex-col gap-3 ">
            <Formik
                initialValues={{
                    email:"",
                    otp:"",
            }}
            validationSchema={otpValidation}
            onSubmit={async(values:otpInterface) => {
                values = {...values,email:email}
                console.log(values)
                loginMutation.mutate(values);
            }}
        >
            {( ) => (
            <Form>
                {/* password */}
                <InputFeild fieldName="otp" placeholder="Enter otp" isRequired={true} labelName="Otp" type="text"/>


                <div className=" mt-14 ">
                    <IconBtn text="Verify"
                        type="submit"
                        customClasses="w-full bg-teritory text-white"
                    />
                </div>
            </Form>
            )}
        </Formik>
            </div>
        </div>
  )
}

export default OtpVerify