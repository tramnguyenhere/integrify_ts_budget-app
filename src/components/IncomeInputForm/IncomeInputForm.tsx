import React from 'react'

import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setIncomeInput, setTotalIncome } from '../../redux/features/budgetSlice'
import { RootState } from '../../redux/store'

import InputItem from '../InputItem/InputItem'
import Button from '../Button/Button'

import { useDateInput, useNumberInput, useTextInput } from '../../hooks/useInput'
import { dateFormatter } from '../../utils/utils'
import './IncomeInputForm.scss'

const IncomeInputForm = () => {
  const [incomeSource, setIncomeSource] = useTextInput()
  const [amountIncome, setAmountIncome] = useNumberInput()
  const [dateIncome, setDateIncome] = useDateInput()
  
  const dispatch = useAppDispatch()
  
  const incomeData = useAppSelector((state:RootState)=>state.budget.budgetTracker.income.data)

  const incomeHandler = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(setIncomeInput({
      inputSource: incomeSource,
      inputAmount: amountIncome,
      inputDate: dateIncome && dateFormatter(dateIncome),
      id: uuidv4()
    }))
    dispatch(setTotalIncome(amountIncome))
  }

  return (
    <div className='budget-section__wrapper' id='income-section'>
      <form onSubmit={incomeHandler}>
        <h2 className='budget-section__heading'>Income <i className="fa-solid fa-arrow-right-to-bracket"></i></h2>
        <InputItem value={incomeSource} inputName='Income Source' inputType='text' onChange={setIncomeSource} />
        <InputItem value={amountIncome} inputName='Amount of Income' inputType='number' onChange={setAmountIncome}/>
        <InputItem inputName='Date of Income' inputType='date' onChange={setDateIncome} />
        <Button btnName='Add Income' type='submit'/>
      </form>
      {incomeData.length > 0 && <ul className='budget-section__list'>
        {incomeData.map(item => (
          <li key={item.id}>
            <span className='budget-section__source'>{item.inputSource}: </span>
            <span className='budget-section__amount'>{item.inputAmount}</span>
            <span className='budget-section__date'> on {item.inputDate}</span>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default IncomeInputForm