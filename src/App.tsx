import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';
import { setBalanceAmount } from './redux/features/budgetSlice';

import './App.scss';

import BudgetPanelUI from './views/BudgetPanelUI/BudgetPanelUI';
import TotalDisplay from './views/BalanceDisplay/BalanceDisplay';

const App = () => {
  const totalIncome = useAppSelector((state:RootState)=>state.budget.budgetTracker.income.totalAmount)
  const totalExpense = useAppSelector((state: RootState) => state.budget.budgetTracker.expense.totalAmount)
  const totalSaving = useAppSelector((state: RootState) => state.budget.target.achievedAmount)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setBalanceAmount(Number(totalIncome-totalExpense-totalSaving)))  
  }, [dispatch, totalExpense, totalIncome, totalSaving])
  
  return (
    <div className="App">
      <h1 className='app__heading'>BUDGET TRACKER</h1>
      <BudgetPanelUI />
      <TotalDisplay />
    </div>
  );
}

export default App;
