import React from 'react'

import InputContainer from '../InputContainer'
import './TotalBalanceControl.scss'

const TotalBalanceControl = () => {
  return (
    <div className='container'>
      <p>Current balance: </p>
      <form action="">
        <InputContainer htmlFor='saving' type='number' label='Transfer to saving account' />
        <button type='submit'>Transfer</button>
      </form>
    </div>
  )
}

export default TotalBalanceControl