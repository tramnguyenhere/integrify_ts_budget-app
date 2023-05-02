import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { useDateInput, useNumberInput, useTextInput } from '../../hooks/useInput'
import { dateFormatter } from '../../utils/utils'
import { Transaction } from '../../types/transaction'

const IncomeForm = () => {
  const [incomeSourceValue, setIncomeSourceValue] = useTextInput()
  const [incomeAmountValue, setIncomeAmountValue] = useNumberInput()
  const [incomeDateValue, setIncomeDateValue] = useDateInput()
  const [incomeTransactions, setIncomeTransactions] = useState<Transaction[]>([])

  const inputFormHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const toBeAddedTransaction: Transaction = {
      id: uuidv4(),
      source: incomeSourceValue,
      amount: incomeAmountValue,
      date: incomeDateValue && dateFormatter(incomeDateValue),
      type: 'income'
    }
    
    setIncomeTransactions([...incomeTransactions, toBeAddedTransaction])
  }

  return (
    <div className='section__wrapper'>
      <form onSubmit={inputFormHandler}>
        <div className="input__container">
          <label htmlFor="income__source">Income source</label>      
          <input type="text" placeholder='e.g.: Salary' value={incomeSourceValue} onChange={setIncomeSourceValue}/>
        </div>
        <div className="input__container">
          <label htmlFor="income__amount">Amount of income</label>      
          <input type="number" min={0} value={incomeAmountValue} onChange={setIncomeAmountValue}/>
        </div>  
        <div className="input__container">
          <label htmlFor="income-source">Date Of Income</label>      
          <input type="date" onChange={setIncomeDateValue}/>
        </div>  
      <button type='submit'>Add income</button>
      </form>
      <ul>
        {incomeTransactions.map(transaction => 
          <li key={transaction.id}>{transaction.source} {transaction.amount}EUR {transaction.date}</li>
        )}  
      </ul>
    </div>
  )
}

export default IncomeForm