import React from 'react'

import './InputItem.scss'

interface InputItemProps {
  inputName: string,
  inputType: string,
  onChange: any,
  value?: string | number,
  max?: number
}

const InputItem = ({ inputName, inputType, onChange, value, max }: InputItemProps) => {
  return (
    <div className='input-item__wrapper'>
          <h4 className='input__heading'>{ inputName}</h4>      
      <input className='input__box' required onChange={onChange} min='0' max={max} type={inputType} value={value}></input>      
      
    </div>
  )
}

export default InputItem