import React from 'react'

import './SavingForm.scss'

const SavingForm = () => {
  return (
    <div className='section__wrapper'>
      <form>
        <div className="input__container">
            <label htmlFor="saving__amount">Set target</label>      
            <input type="number" />
        </div>  
        <button type='submit'>Reset</button>
      </form>
      <div className='saving-details'>
        <p className='saving-detail'>Current saving: </p> 
        <p className='saving-detail'>Target: </p> 
        <p className='saving-detail'>Progress: </p> 
      </div> 
    </div>
  )
}

export default SavingForm