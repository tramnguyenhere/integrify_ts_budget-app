export interface InputType {
    inputSource: string,
    inputAmount: number,
    inputDate: string,
    id: string
}

interface BudgetPartBase {
    itemName: string,
    totalAmount: number,
    data: InputType[]
}

interface TargetPart {
    itemName: string,
    target: number,
    achievedAmount: number
}

export interface dataType {
    target: TargetPart,
    budgetTracker: {
        balanceAmount: number,
        income: BudgetPartBase,
        expense: BudgetPartBase
    }
}