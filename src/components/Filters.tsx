import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import PeriodFilter from './PeriodFilter'
import { InterestType, PeriodInputsType, PeriodButtonsType } from '../domain/filters'
import InterestFilters from './InterestFilters'
import SumInput from './SumInput'
import Checkbox from './Checkbox'

type FiltersProps = {
  periodFilter: PeriodButtonsType
  interestFilter: InterestType
  changePeriodFilter: (filter: PeriodButtonsType) => void
  changeInterestFilter: (filter: InterestType) => void
  finUslugi: boolean
  retiree: boolean
  newClient: boolean
  changeFinUslugiFilter: () => void
  changeRetireeFilter: () => void
  changeNewClientFilter: () => void
  inputDepositSum: (sum: number) => void
  inputDepositTerm: (val1:string, val2:string) => void

  sumInputValue: string
  setSumInputValue:(val:string) => void
  periodInputsValue: PeriodInputsType
  setPeriodInputsValue:(periodInputsValue:PeriodInputsType)=>void
}

function Filters(
  {
    periodFilter,
    interestFilter,
    changePeriodFilter,
    changeInterestFilter,
    finUslugi,
    retiree,
    newClient,
    changeFinUslugiFilter,
    changeRetireeFilter,
    changeNewClientFilter,
    inputDepositSum,
    inputDepositTerm,
    sumInputValue,
    setSumInputValue,
    periodInputsValue,
    setPeriodInputsValue
  } : FiltersProps) {

  return (
    <div className='filters__container'>
      <SumInput onClick={inputDepositSum} sumInputValue={sumInputValue} setSumInputValue={setSumInputValue}/>
      <PeriodFilter value={periodFilter} onChange={changePeriodFilter} inputOnChange={inputDepositTerm} periodInputsValue={periodInputsValue} setPeriodInputsValue={setPeriodInputsValue}/>
      <InterestFilters value={interestFilter} onChange={changeInterestFilter}/>
      <Checkbox 
        value={[finUslugi, retiree, newClient]} 
        onChange={[changeFinUslugiFilter,changeRetireeFilter, changeNewClientFilter]}/>
    </div>
  )
}

export default Filters