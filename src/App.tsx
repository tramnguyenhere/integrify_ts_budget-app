import { useEffect, useState } from 'react';
import BudgetPanelUI from './views/BudgetPanelUI/BudgetPanelUI';
import './App.scss';
import BalanceDisplay from './views/BalanceDisplay/BalanceDisplay';
import { IncomeType, ExpenseType, PieChartData } from './types/type';
import PieChart from './views/PieChart/PieChart';
import useSavingsTarget from './hooks/useSavingTarget';

const App = () => {
  const [incomeData, setIncomeData] = useState<IncomeType[]>([]);
  const [expenseData, setExpenseData] = useState<ExpenseType[]>([]);
  const [currentTarget, setCurrentTarget] = useState<number>(0);
  const [currentSaving, setCurrentSaving] = useState<number>(0);
  const totalIncome = incomeData.reduce(
    (acc, income) => acc + income.amountIncome,
    0
  );
  const totalExpense = expenseData.reduce(
    (acc, expense) => acc + expense.amountExpense,
    0
  );
  const [currentBalance, setCurrentBalance] = useState<number>(
    totalIncome - totalExpense - currentSaving
  );
  
  const hasReachedTarget = useSavingsTarget({
    currentBalance,
    savingTarget: currentTarget,
  });

  const pieData = [
    totalIncome > 0 && { label: 'Income', value: totalIncome },
    totalExpense> 0 && { label: 'Expense', value: totalExpense },
    currentSaving > 0 && { label: 'Saving', value: currentSaving }
  ].filter(Boolean) as PieChartData[];

  useEffect(() => {
    setCurrentBalance(totalIncome - totalExpense - currentSaving);
  }, [totalIncome, totalExpense, currentSaving]);
  return (
    <div className='App'>
      <h1 className='app__heading'>BUDGET TRACKER</h1>
      <BudgetPanelUI
        currentBalance={currentBalance}
        currentSaving={currentSaving}
        currentTarget={currentTarget}
        setCurrentTarget={setCurrentTarget}
        setIncomeData={setIncomeData}
        incomeData={incomeData}
        setExpenseData={setExpenseData}
        expenseData={expenseData}
      />
      <div className='app__chart'>
        <BalanceDisplay
          currentSaving={currentSaving}
          setCurrentSaving={setCurrentSaving}
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
        />
        <PieChart data={pieData} width={300} height={300}/>
      </div>
      <h1>{hasReachedTarget && "You has reached the saving target"}</h1>
    </div>
  );
};

export default App;