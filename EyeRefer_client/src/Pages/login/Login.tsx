import { Formik, Form } from "formik"
import { useNavigate } from "react-router-dom"
import { useLogin } from "../../actions/user"
import InputFeild from "../../components/common/InputFeild"
import IconBtn from "../../components/common/IconBtn"
import { loginInterface } from "../../interfaces/interfaces"
import { loginValidationSchema } from "../../validations/signValidation"

const OtpVerify:React.FC = () => {
    const navigate = useNavigate()

    const loginMutation = useLogin()
  return (
    <div className=" text-center w-[100%] p-10">
            <div className=" text-textColor font-sans font-medium text-4xl mb-8">Log In</div>
            <div className=" border p-9 rounded-md bg-white flex flex-col gap-3 ">
            <Formik
                initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={loginValidationSchema}
            onSubmit={async(values: loginInterface) => {
                loginMutation.mutate(values);
            }}
        >
            {( ) => (
            <Form>

                <InputFeild fieldName="email" placeholder="User email" isRequired={true} labelName="User email" type="email"/>

                {/* password */}
                <InputFeild fieldName="password" placeholder="Password" isRequired={true} labelName="Password" type="password"/>


                <div className=" mt-14 ">
                    <IconBtn text="Login"
                        type="submit"
                        customClasses="w-full bg-teritory text-white"
                        />
                </div>

                <div className="text-sm text-gray-500 my-2  ">
                Don't have an account? <span>{" "}</span> 
                <button type="button" className=" text-teritory font-bold   " onClick={()=>{
                    navigate("/")
                }}>
                  Sing up 
                </button>
                </div>
            </Form>
            )}
        </Formik>
            </div>
        </div>
  )
}

export default OtpVerify