import React, { ChangeEvent, FormEvent, useState } from 'react'
import { PeriodInputsType } from '../domain/filters'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { choosePeriod } from '../redux/filtersSlice'
interface PeriodFilterProps {
  // periodInputsValue: PeriodInputsType
  // setPeriodInputsValue: (periodInputsValue: PeriodInputsType) => void
}


function PeriodFilter() {
  interface Term {
    label: string,
    min: string,
    max: string
  }
  const terms: Term[] = [
    {
      label:'любой',
      min: "",
      max:""
    },
    // {
    //   label:'1 месяц',
    //   min: "1",
    //   max:"60"
    // },
    {
      label:'3 месяца',
      min: "61",
      max:"140"
    },
    {
      label:'6 месяцев',
      min: "141",
      max:"210"
    },
    {
      label:'1 год',
      min: "211",
      max: "400"
    }
  ]

  const period = useAppSelector(state => state.filters.period )
  const dispatch = useAppDispatch()
  
  const handleChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    // setPeriodInputsValue({ ...periodInputsValue, inputValue1: event.target.value })
    dispatch(choosePeriod({...period, inputValue1: event.target.value}))
  }
  const handleChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    // setPeriodInputsValue({ ...periodInputsValue, inputValue2: event.target.value })
    dispatch(choosePeriod({...period, inputValue2: event.target.value}))
  }

  return (
    <div className='period-filter__container'>
      <h3>Cрок вклада</h3>
      <div>Выберите срок вклада</div>
      <div>
        {terms.map(term => {
          return(
            <button key={term.label}
              className={term.min === period.inputValue1 && term.max === period.inputValue2 ? 'period__btn-active' : 'period__btn'} 
              onClick={() => dispatch(choosePeriod({inputValue1: term.min, inputValue2: term.max}))}>{term.label}
            </button>
          )
        })}
      </div>
      <div className='inputs-term__text'>Или введите диапазон в днях</div>
      <div className='inputs-term__inputs'>
        <input className='inputs-term__input' placeholder='от' value={period.inputValue1} onChange={handleChangeInput1} />
        <input className='inputs-term__input' placeholder='до' value={period.inputValue2} onChange={handleChangeInput2} />
      </div>
    </div>
  )
}

export default PeriodFilter