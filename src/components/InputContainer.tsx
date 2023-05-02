import React from 'react'

interface InputContainerProps {
    htmlFor: string,
    type: string,
    placeholder?: string,
    label: string
}

const InputContainer = ({htmlFor, type, placeholder, label}: InputContainerProps) => {
  return (
    <div className="input__container">
        <label htmlFor={htmlFor}>{label}</label>      
        <input type={type} placeholder={placeholder} />
    </div>  
  )
}

export default InputContainer