export interface Transaction {
    id: number;
    amount: number;
    category: string;
    type: 'income' | 'expense';
}

// enum BudgetType {
//     Income = 'income',
//     Expense = 'expense',
//     Saving = 'saving'
// }