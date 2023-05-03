import React from 'react'

import { IncomeInputForm, ExpenseInputForm, TargetInputForm } from '../../components'

import './BudgetPanelUI.scss'

const BudgetPanelUI = () => {
  return (
    <div className='budget-panel'>
      <IncomeInputForm />
      <ExpenseInputForm />
      <TargetInputForm />
  </div>
  )
}

export default BudgetPanelUI