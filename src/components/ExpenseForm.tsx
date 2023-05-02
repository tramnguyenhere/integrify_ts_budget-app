import React from 'react'

const ExpenseForm = () => {
  return (
    <form>
      <div className="input__container">
          <label htmlFor="expense__source">Expense source</label>      
          <input type="text" placeholder='e.g.: Salary' />
      </div>  
      <div className="input__container">
          <label htmlFor="expense__amount">Amount of expense</label>      
          <input type="number" min={0} />
      </div>  
      <div className="input__container">
          <label htmlFor="expense-source">Expense source</label>      
          <input type="date" />
        </div>  
      <button type='submit'>Add expense</button>
    </form>
  )
}

export default ExpenseForm