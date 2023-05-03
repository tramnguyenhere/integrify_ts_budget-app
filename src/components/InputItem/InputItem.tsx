import React from 'react'
import './InputItem.scss'

const InputItem = ({ inputName, inputType, onChange, value, max }: any) => {
  return (
    <div className='input-item__wrapper'>
          <h4 className='input__heading'>{ inputName}</h4>      
      <input className='input__box' required onChange={onChange} min='0' max={max} type={inputType} value={value}></input>      
      
    </div>
  )
}

export default InputItem