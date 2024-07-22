import React, { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setDepositSum } from '../redux/filtersSlice'



function SumInput() {

  const dispatch = useAppDispatch()
  const depositSum = useAppSelector(state => state.filters.sumDeposit)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDepositSum(event.target.value))
  }

  return (
    <div>
      <h3>Cумма  вклада</h3>
      <div>Введите сумму</div>
      <input className='sum__input' type='text' value={depositSum} onChange={handleChange} placeholder='0'  /> 
    </div>
  )
}

export default SumInput