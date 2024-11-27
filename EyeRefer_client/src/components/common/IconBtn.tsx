import React from 'react'
import { iconBtn } from '../../interfaces/interfaces'

const IconBtn:React.FC<iconBtn> = ({
    text,
    onClick,
    children,
    disabled = false,
    outline=false,
    customClasses="",
    type = "button"
}) => {

    console.log("typetypetype",type)
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    type={type}
    className={`flex items-center justify-center text-base  ${
          outline ? "border border-customGreen bg-transparent" : `${customClasses ? `${customClasses}`:" bg-yellow-300"}`
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold hover:bg-teritoryDark  ${customClasses}`}
    >
        {
            children ? (<div className='flex items-center justify-center gap-2'>
                <span>
                    {text}
                </span>
                {children}
            </div>) : (text)
        }
    </button>
  )
}

export default IconBtn