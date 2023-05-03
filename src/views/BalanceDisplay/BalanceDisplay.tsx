import React, {  useState } from 'react'
import Button from '../../components/Button/Button'
import InputItem from '../../components/InputItem/InputItem'
import './BalanceDisplay.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store'
import { setAchievedAmount } from '../../redux/features/budgetSlice'

const TotalDisplay = () => {
  const [toSaving, setToSaving] = useState(0)
  const balanceAmount = useAppSelector((state:RootState)=>state.budget.budgetTracker.balanceAmount)
  const dispatch = useAppDispatch()

  const totalBalanceHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dispatch(setAchievedAmount(toSaving))

    setToSaving(0)
  }

  return (
    <div className='balance-display__wrapper'>
      <span className='balance-display--current-value'>Current Balance: {balanceAmount} </span>
      <form onSubmit={totalBalanceHandler} className='balance-display--saving-transfer'>
        <InputItem inputName='Transfer to saving account' value={toSaving} inputType='number' max={balanceAmount} onChange={(e: { target: { value: React.SetStateAction<number> } })=>setToSaving(e.target.value)} />
        <Button btnName='Transfer' type='submit'/>
      </form>
    </div>
  )
}

export default TotalDisplay