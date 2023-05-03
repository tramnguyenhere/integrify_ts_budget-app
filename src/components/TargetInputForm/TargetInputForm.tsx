import React from 'react'

import InputItem from '../InputItem/InputItem'
import Button from '../Button/Button'
import './TargetInputForm.scss'
import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import { RootState } from '../../redux/store'
import { setTarget, setResetTarget } from '../../redux/features/budgetSlice'
import { useNumberInput } from '../../hooks/useInput'

const TargetInputForm = () => {
  const [currentTarget, setCurrentTarget] = useNumberInput()

  const achievedSavingAmount = useAppSelector((state:RootState)=>state.budget.target.achievedAmount)
  const target = useAppSelector((state: RootState) => state.budget.target.target)
  
  const dispatch = useAppDispatch()

  const progressValue = target > 0 ? achievedSavingAmount * 100 / target : 0

  const targetHandler = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setTarget(currentTarget))
  }

  const resetTarget = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(setResetTarget())
  }
  
  return (
    <div className='budget-section__wrapper' id='target-section'>
      <form onSubmit={targetHandler}>
        <h2 className='budget-section__heading'>Target <i className="fa-solid fa-sack-dollar"></i></h2>
        <InputItem value={currentTarget} inputName='Set Target' inputType='number' onChange={setCurrentTarget} />
        <Button className='btn' btnName='Save' type='submit'/>
        <Button className='btn reset-btn' btnName='Reset' type='submit' onClick={resetTarget} />
      </form>
      <div id='target__details'>
        <span className='budget-section-input__heading'>Current Saving: 
          <span className='budget-section-input__data'>{achievedSavingAmount}</span>
        </span>
        <span className='budget-section-input__heading'>Target: 
          <span className='budget-section-input__data'>{target}</span>
        </span>
        <span className='budget-section-input__heading' id='target-progress__wrapper'>Progress
          <progress id='target__progress' value={progressValue} max='100'></progress>
        </span>
      </div>
   </div>
  )
}

export default TargetInputForm