import React from 'react'
import { InterestTypes2 } from '../domain/filters'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setInterest } from '../redux/filtersSlice'




function InterestFilters() {

  const dispatch = useAppDispatch()
  const interest = useAppSelector(state => state.filters.interest )

  return (
    <div className='interest-filter__container'>
      <h3>Выплата %</h3>
      <div className='interest-filter__text'>Выберите частоту выплат</div>
      <div className='interest-filter__items__container'>
        {InterestTypes2.map(el => {
          return (
            <div key={el.name}className={interest === el?'interest-filter__item-active':'interest-filter__item'}>
            <input  type='radio' value={el.name} checked={interest === el} onChange={() => dispatch(setInterest(el))}/> 
            <p>{el.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InterestFilters