import { createSlice } from "@reduxjs/toolkit";
import { dataType } from "../../types/type";

const initialState: dataType = {
    target: {
        itemName: 'Set Target',
        target: 0,
        achievedAmount: 0
    },
    budgetTracker: {
        balanceAmount: 0,
        income: {
            itemName: 'Income Source',
            totalAmount: 0,
            data: []
        },
        expense: {
            itemName: 'Expense Source',
            totalAmount: 0,
            data: []
        }
    }
}

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        setTotalIncome: (state, action) => {
            state.budgetTracker.income.totalAmount = Number(state.budgetTracker.income.totalAmount) + Number(action.payload)
        },
        setIncomeInput: (state, action) => {
            state.budgetTracker.income.data = [...state.budgetTracker.income.data, action.payload]
        },
        setTotalExpense: (state, action) => {
            state.budgetTracker.expense.totalAmount = Number(state.budgetTracker.expense.totalAmount) + Number(action.payload)
        },
        setExpenseInput: (state, action) => {
            state.budgetTracker.expense.data = [...state.budgetTracker.expense.data, action.payload]
        },
        setTarget: (state, action) => {
            state.target.target = action.payload
        },
        setResetTarget: (state) => {
            state.target.target = 0
            state.budgetTracker.income.totalAmount = Number(state.target.achievedAmount) + Number(state.budgetTracker.income.totalAmount)
            state.target.achievedAmount=0
        },
        setAchievedAmount: (state, action) => {
            state.target.achievedAmount = Number(state.target.achievedAmount) + Number(action.payload)
        },
        setBalanceAmount: (state, action) => {
            state.budgetTracker.balanceAmount = action.payload
        }
    }
})

export const {
    setTotalIncome, setIncomeInput, setExpenseInput, setTotalExpense, setTarget, setAchievedAmount, setBalanceAmount, setResetTarget
} = budgetSlice.actions;



export default budgetSlice.reducer