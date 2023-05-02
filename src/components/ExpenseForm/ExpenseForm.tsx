import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { Transaction } from '../../types/transaction'
import { useDateInput, useNumberInput, useTextInput } from '../../hooks/useInput'
import { dateFormatter } from '../../utils/utils'

const ExpenseForm = () => {
  const [expenseSourceValue, setExpenseSourceValue] = useTextInput()
  const [expenseAmountValue, setExpenseAmountValue] = useNumberInput()
  const [expenseDateValue, setExpenseDateValue] = useDateInput()
  const [expenseTransactions, setExpenseTransactions] = useState<Transaction[]>([])

  const inputFormHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const toBeAddedTransaction: Transaction = {
      id: uuidv4(),
      source: expenseSourceValue,
      amount: expenseAmountValue,
      date: expenseDateValue && dateFormatter(expenseDateValue),
      type: 'expense'
    }
    
    setExpenseTransactions([...expenseTransactions, toBeAddedTransaction])
  }

  return (
    <div className="section__wrapper">
      <form onSubmit={inputFormHandler}>
        <div className="input__container">
            <label htmlFor="expense__source">Expense source</label>      
            <input type="text" placeholder='e.g.: Salary' value={expenseSourceValue} onChange={setExpenseSourceValue}/>
        </div>  
        <div className="input__container">
            <label htmlFor="expense__amount">Amount of expense</label>      
            <input type="number" min={0} value={expenseAmountValue} onChange={setExpenseAmountValue}/>
        </div>  
        <div className="input__container">
          <label htmlFor="expense-source">Expense source</label>      
          <input type="date" onChange={setExpenseDateValue}/>
        </div>  
      <button type='submit'>Add expense</button>
      </form>
      <ul>
      {expenseTransactions.map(transaction => 
        <li key={transaction.id}>{transaction.source} {transaction.amount}EUR {transaction.date}</li>
      )}  
      </ul>
    </div>
  )
}

export default ExpenseForm