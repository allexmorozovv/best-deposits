import React, { ChangeEvent, ChangeEventHandler,FormEvent, useState } from 'react'
import { InterestType } from '../domain/filters'

interface InterestFilterProps {
  value: InterestType,
  onChange: (value: InterestType) => void
}


function InterestFilters( {value, onChange}: InterestFilterProps) {

// radio button component ?

  const [interestPayment, setInterestPayment] = useState<InterestType>(value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const handleChange = (event: any) => {
    // console.log('event', event);
    // target.value vs currentTarget.value
    onChange(event.target.value)
    setInterestPayment(event.target.value)
  }

  return (
    <div className='interest-filter__container'>
      <h3>Выплата %</h3>
      <div className='interest-filter__text'>Выберите частоту выплат</div>
      <div className='interest-filter__items__container'>
        <div className={interestPayment === "no matter"?'interest-filter__item-active':'interest-filter__item'}>
          <input  type="radio" value={"no matter"} checked={interestPayment === "no matter"} onChange={handleChange} /> 
          <p>не важно</p>
        </div>
        <div className={interestPayment === "monthly"?'interest-filter__item-active':'interest-filter__item'} >
          {/* <div className='interest-filter__input'> */}
          <input type="radio" value={"monthly"} checked={interestPayment === "monthly" } onChange={handleChange}/> 
          {/* </div> */}
          <p>ежемесячно</p>
        </div>
        <div className={interestPayment === "finally"?'interest-filter__item-active':'interest-filter__item'}>
          {/* <div className='interest-filter__input'> */}
          <input type="radio" value={"finally"} checked={interestPayment === "finally"}  onChange={handleChange}/> 
          {/* </div> */}
          <p>в конце</p>
        </div>
      </div>
    </div>
  )
}

export default InterestFilters