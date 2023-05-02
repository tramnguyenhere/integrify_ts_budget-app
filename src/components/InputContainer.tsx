import React from 'react'

interface InputContainerProps {
    htmlFor: string,
    type: string,
    placeholder?: string,
    label: string
    onChange?: () => void
    value?: string | number
}

const InputContainer = ({htmlFor, type, placeholder, label, onChange, value}: InputContainerProps) => {
  return (
    <div className="input__container">
        <label htmlFor={htmlFor}>{label}</label>      
        <input required type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>  
  )
}

export default InputContainer