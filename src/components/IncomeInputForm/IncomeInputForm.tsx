import React, { useState } from 'react';
import InputItem from '../InputItem/InputItem';
import Button from '../Button/Button';
import './IncomeInputForm.scss';
import { v4 as uuidv4 } from 'uuid';
import { IncomeInputFormProps, IncomeType } from '../../types/type';
import { dateFormatter } from '../../utils/utils';

const IncomeInputForm = (props: IncomeInputFormProps) => {
  const [incomeSource, setIncomeSource] = useState('');
  const [amountIncome, setAmountIncome] = useState(0);
  const [dateIncome, setDateIncome] = useState<Date>();
  const { incomeData, setIncomeData } = props;

  const incomeHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (amountIncome !== 0 && incomeSource.length > 0 && dateIncome) {
      const submitData: IncomeType = {
        incomeSource,
        amountIncome,
        dateIncome: dateIncome && dateFormatter(dateIncome),
        id: uuidv4(),
      };

      setIncomeData([...incomeData, submitData]);
    }
  };

  const handleIncomeSourceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncomeSource(e.target.value);
  };

  const handleAmountIncomeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountIncome(Number(e.target.value));
  };

  const handleDateIncomeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateIncome(new Date(e.target.value));
  };
  return (
    <div className='budget-section__wrapper' id='income-section'>
      <form onSubmit={incomeHandler}>
        <h2 className='budget-section__heading'>
          Income <i className='fa-solid fa-arrow-right-to-bracket'></i>
        </h2>
        <InputItem
          inputName='Income Source'
          inputType='text'
          onChange={handleIncomeSourceInput}
        />
        <InputItem
          value={amountIncome}
          inputName='Amount of Income'
          inputType='number'
          onChange={handleAmountIncomeInput}
        />
        <InputItem
          inputName='Date of income'
          inputType='date'
          onChange={handleDateIncomeInput}
        />
        <Button btnName='Add Income' type='submit' />
      </form>
      {incomeData.length > 0 && (
        <ul className='budget-section__list'>
          {incomeData.map((item: any) => (
            <li key={item.id}>
              <span className='budget-section__source'>
                {item.incomeSource}:{' '}
              </span>
              <span className='budget-section__amount'>
                {item.amountIncome}
              </span>
              <span className='budget-section__date'>
                {' '}
                on {item.dateIncome}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IncomeInputForm;