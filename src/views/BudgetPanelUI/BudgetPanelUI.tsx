import React from 'react'

import { IncomeInputForm, ExpenseInputForm, TargetInputForm } from '../../components'
import { BudgetPanelUIProps } from '../../types/PropsTypes'
import './BudgetPanelUI.scss'

const BudgetPanelUI = (props: BudgetPanelUIProps) => {
  const {expenseData, currentBalance, incomeData, setIncomeData, setExpenseData, currentTarget, setCurrentTarget, currentSaving} = props
  return (
    <div className='budget-panel'>
      <IncomeInputForm incomeData={incomeData} setIncomeData={setIncomeData}/>
      <ExpenseInputForm currentBalance={currentBalance} expenseData={expenseData} setExpenseData={setExpenseData}/>
      <TargetInputForm currentSaving={currentSaving} currentTarget={currentTarget} setCurrentTarget={setCurrentTarget}/>
  </div>
  )
}

export default BudgetPanelUI