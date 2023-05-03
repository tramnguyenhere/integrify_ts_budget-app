import { v4 as uuidv4 } from 'uuid'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux/store'
import { setExpenseInput, setTotalExpense } from '../../redux/features/budgetSlice'

import InputItem from '../InputItem/InputItem'
import Button from '../Button/Button'

import { useDateInput, useNumberInput, useTextInput } from '../../hooks/useInput'

import './ExpenseInputForm.scss'
import React from 'react'


const ExpenseInputForm = () => {
  const [expenseSource, setExpenseSource] = useTextInput()
  const [amountExpense, setAmountExpense] = useNumberInput()
  const [dateExpense, setDateExpense] = useDateInput()

  const dispatch = useAppDispatch()
  const expenseData = useAppSelector((state: RootState) => state.budget.budgetTracker.expense.data)
  
  const expenseHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setExpenseInput({
      inputSource: expenseSource,
      inputAmount: amountExpense,
      inputDate: dateExpense,
      id: uuidv4()
    }))
    dispatch(setTotalExpense(amountExpense))
  }

  return (
    <div className='budget-section__wrapper' id='expense-section'>
      <form onSubmit={expenseHandler}>
        <h2 className='budget-section__heading'>Expense <i className="fa-solid fa-arrow-right-from-bracket"></i></h2>
        <InputItem value={expenseSource} inputName='Expense Source' inputType='text' onChange={setExpenseSource} />
        <InputItem value={amountExpense} inputName='Amount of Expense' inputType='number' onChange={setAmountExpense} />
        <InputItem value={dateExpense} inputName='Date of Expense' inputType='date' onChange={setDateExpense} />
        <Button btnName='Add Expense' type='submit'/>
      </form>
      {expenseData.length > 0 &&
        <ul className='budget-section__list'>
        {expenseData.map(item => (
          <li key={item.id}>
            <span className='budget-section__source'>{item.inputSource}: </span>
            <span className='budget-section__amount'>{item.inputAmount} </span>
            <span className='budget-section__date'> on {item.inputDate} </span>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default ExpenseInputForm