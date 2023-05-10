import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputItem from '../InputItem/InputItem';
import Button from '../Button/Button';
import './ExpenseInputForm.scss';
import { dateFormatter } from '../../utils/utils';
import { ExpenseInputFormProps } from '../../types/PropsTypes';

const ExpenseInputForm = (props: ExpenseInputFormProps) => {
  const { expenseData, setExpenseData, currentBalance } = props;
  const [expenseSource, setExpenseSource] = useState('');
  const [amountExpense, setAmountExpense] = useState(0);
  const [dateExpense, setDateExpense] = useState<Date>();

  const expenseHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (amountExpense !== 0 && expenseSource.length > 0 && dateExpense) {
      const submitData = {
        expenseSource,
        amountExpense,
        dateExpense: dateExpense && dateFormatter(dateExpense),
        id: uuidv4(),
      };
  
      setExpenseData([...expenseData, submitData]);
    }
   
  };

  const handleExpenseSourceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseSource(e.target.value);
  };

  const handleExpenseAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountExpense(Number(e.target.value));
  };

  const handleExpenseDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateExpense(new Date(e.target.value));
  };
  return (
    <div className='budget-section__wrapper' id='expense-section'>
      <form onSubmit={expenseHandler}>
        <h2 className='budget-section__heading'>
          Expense <i className='fa-solid fa-arrow-right-from-bracket'></i>
        </h2>
        <InputItem
          value={expenseSource}
          inputName='Expense Source'
          inputType='text'
          onChange={handleExpenseSourceInput}
        />
        <InputItem
          max={currentBalance}
          value={amountExpense}
          inputName='Amount of Expense'
          inputType='number'
          onChange={handleExpenseAmountInput}
        />
        <InputItem
          inputName='Date of Expense'
          inputType='date'
          onChange={handleExpenseDateInput}
        />
        <Button btnName='Add Expense' type='submit' />
      </form>
      {expenseData.length > 0 && (
        <ul className='budget-section__list'>
          {expenseData.map((item: any) => (
            <li key={item.id}>
              <span className='budget-section__source'>
                {item.expenseSource}:{' '}
              </span>
              <span className='budget-section__amount'>
                {item.amountExpense}{' '}
              </span>
              <span className='budget-section__date'>
                {' '}
                on {item.dateExpense}{' '}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseInputForm;