import React from 'react'
import IncomeForm from './IncomeForm'
import ExpenseForm from './ExpenseForm'
import SavingForm from './SavingForm/SavingForm'

const FormGroupDisplay = () => {
  return (
    <div className='form-group'>
        <IncomeForm />
        <ExpenseForm />
        <SavingForm />  
    </div>
  )
}

export default FormGroupDisplay