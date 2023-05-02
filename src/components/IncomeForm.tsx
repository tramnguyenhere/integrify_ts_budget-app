import React from 'react'

const IncomeForm = () => {
  return (
    <form>
        <div className="input__container">
            <label htmlFor="income__source">Income source</label>      
            <input type="text" placeholder='e.g.: Salary' />
        </div>  
        <div className="input__container">
            <label htmlFor="income__amount">Amount of income</label>      
            <input type="number" min={0} />
        </div>  
        <div className="input__container">
            <label htmlFor="income-source">Income source</label>      
            <input type="date" />
          </div>  
          <button type='submit'>Add income</button>
    </form>
  )
}

export default IncomeForm