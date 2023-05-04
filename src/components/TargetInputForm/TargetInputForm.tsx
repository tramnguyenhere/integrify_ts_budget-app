import React, { useState } from 'react';
import InputItem from '../InputItem/InputItem';
import Button from '../Button/Button';
import "./TargetInputForm.scss"
import { TargetInputFormProps } from '../../types/type';

const TargetInputForm = (props: TargetInputFormProps) => {
  const {
    currentTarget, setCurrentTarget, currentSaving
  } = props;
  const [targetInput, setTargetInput] = useState(0)

  const handleTargetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetInput(Number(e.target.value))
  }

  const targetHandler = (e: React.FormEvent ) => {
    e.preventDefault()
    setCurrentTarget(targetInput)
  }

  const resetTarget = (e: React.FormEvent ) => {
    e.preventDefault()
    setCurrentTarget(0)
  }

  const progressValue = currentTarget > 0 ? currentSaving * 100 / currentTarget : 0

  return (
    <div className='budget-section__wrapper' id='target-section'>
      <form onSubmit={targetHandler}>
        <h2 className='budget-section__heading'>
          Target <i className='fa-solid fa-sack-dollar'></i>
        </h2>
        <InputItem
          value={targetInput}
          inputName='Set Target'
          inputType='number'
          onChange={handleTargetInput}
        />
        <Button className='btn' btnName='Save' type='submit' />
        <Button
          className='btn reset-btn'
          btnName='Reset'
          type='submit'
          onClick={resetTarget}
        />
      </form>
      <div id='target__details'>
        <span className='budget-section-input__heading'>
          Current Saving:
          <span className='budget-section-input__data'>
            {currentSaving}
          </span>
        </span>
        <span className='budget-section-input__heading'>
          Target:
          <span className='budget-section-input__data'>{currentTarget}</span>
        </span>
        <span
          className='budget-section-input__heading'
          id='target-progress__wrapper'
        >
          Progress
          <progress
            id='target__progress'
            value={progressValue}
            max='100'
          ></progress>
        </span>
      </div>
    </div>
  );
};

export default TargetInputForm;