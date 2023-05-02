export interface Transaction {
    id: string,
    source: string,
    amount: number,
    date: string |undefined,
    type: 'income' | 'expense';
}

// enum BudgetType {
//     Income = 'income',
//     Expense = 'expense',
//     Saving = 'saving'
// }