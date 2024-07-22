import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import PeriodFilter from './PeriodFilter'
import InterestFilters from './InterestFilters'
import SumInput from './SumInput'
import Checkbox from './Checkbox'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { changeFinUslugi, changeNewclient, changeRetiree } from '../redux/filtersSlice'



function Filters() {

  const dispatch = useAppDispatch()
  const finUslugi = useAppSelector(state => state.filters.finUslugi) 
  const retiree = useAppSelector(state => state.filters.retiree)
  const newClient = useAppSelector(state => state.filters.newClient)
    
  const setFinUslugi = () => {
    dispatch(changeFinUslugi())
  }
  const setRetiree = () => {
    dispatch(changeRetiree())
  }
  const setNewClient = () => {
    dispatch(changeNewclient())
  }
    
   


  return (
    <div className='filters__container'>
      <SumInput/>
      <PeriodFilter/>
      <InterestFilters />
      <div className='checkbox__container'>
        <h3>Другие фильтры</h3>
        <div>Добавьте фильтры</div>
        <div className='checkbox__wrapper'>
          <Checkbox value={finUslugi} onChange={setFinUslugi}  label={'фин услуги'} /> 
          <Checkbox value={retiree} onChange={setRetiree} label={'пенсия'} /> 
          <Checkbox  value={newClient} onChange={setNewClient} label={'новым'}/>
        </div>
      </div>
    </div>
  )
}
export default Filters