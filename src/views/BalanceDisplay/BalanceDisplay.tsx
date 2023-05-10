import React, { useState } from 'react'

import Button from '../../components/Button/Button'
import InputItem from '../../components/InputItem/InputItem'
import './BalanceDisplay.scss'

const BalanceDisplay = (props: any) => {
  const {currentBalance, setCurrentBalance, setCurrentSaving, currentSaving }= props
  const [toSaving, setToSaving] = useState<number>(0)

  const savingInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSaving(Number(e.target.value))
  }

  const transferToSavingHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentBalance(currentBalance-toSaving)
    setCurrentSaving(currentSaving+toSaving)
  }

  return (
    <div className='balance-display__wrapper'>
      <span className='balance-display--current-value'>Current Balance: {currentBalance} </span>
      <form onSubmit={transferToSavingHandler} className='balance-display--saving-transfer'>
        <InputItem inputName='Transfer to saving account' value={toSaving} inputType='number' max={currentBalance} onChange={savingInputHandler} />
        <Button btnName='Transfer' type='submit'/>
      </form>
    </div>
  )
}

export default BalanceDisplay