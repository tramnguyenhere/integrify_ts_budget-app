import { ExpenseType } from "./ExpenseType";
import { IncomeType } from "./IncomeType";

export interface BudgetPanelUIProps {
    currentBalance: number;
    currentSaving: number;
    currentTarget: number;
    setCurrentTarget: (value: number) => void;
    setIncomeData: (value: IncomeType[]) => void;
    incomeData: IncomeType[];
    setExpenseData: (value: ExpenseType[]) => void;
    expenseData: ExpenseType[];
  }
  
export type IncomeInputFormProps = {
    incomeData: IncomeType[];
    setIncomeData: (value: IncomeType[]) => void;
};

export type ExpenseInputFormProps = {
    expenseData: ExpenseType[];
    setExpenseData: (value: ExpenseType[]) => void;
    currentBalance: number;
};
  
export type TargetInputFormProps = {
    currentTarget: number;
    setCurrentTarget: (value: number) => void;
    currentSaving: number;
};
  