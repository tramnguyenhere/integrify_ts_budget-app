import React from 'react'

import './Button.scss'

const Button = ({btnType, className,btnName, onClick}:any) => {
  return (
      <button className={`${className} btn`} onClick={onClick} type={btnType}>{btnName}</button>
  )
}

export default Button