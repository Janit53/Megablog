import React, { useId } from 'react'

const Input = ({ ref, label, type = "text", className = '', ...props }) => {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className={`block mb-1 pl-1`} htmlFor={id}>{label}</label>}
            <input id={id} ref={ref} type={type} className={`px-3 py-2 rounded-lg bg-white text-black focus:bg-gray-50 duration-200 broder border-gray-200 w-full ${className}`} {...props} />
        </div>
    )
}

export default Input