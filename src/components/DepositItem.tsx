import React from 'react'
import {  IDeposit } from '../domain/deposit'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { hideDeposit } from '../redux/depositsSlice'
interface DepositProps {
  deposit: IDeposit
}

function DepositItem({deposit}: DepositProps) {
  const dispatch = useAppDispatch()
  const hiddenDepIds = useAppSelector(state => state.deposits.hiddenDepositsIds)
  // const hiddenDeposits = useAppSelector(state => state.deposits.deposits.filter(dep => hiddenDepIds.includes(dep.depositId) ))
  const navigate = useNavigate()
  const handleClicklHide = () => {
    dispatch(hideDeposit(deposit))
    
  }
  const handleClickRedirect = () => {
    navigate(`banks/${deposit.bankId}`)
  }
  return (
    <div className='deposit__container'>
      <div  className='deposit__item' ><img className='img' src={deposit.bankLogo}/>{deposit.name}</div>
              <div className='deposit__item'>{deposit.rate}%</div>
              <div>{0}%</div>
              <div>{0}%</div>
              <div>{deposit.period} дня</div>
              <div>от {deposit.min}<br />до {deposit.max}</div>
              <div>{deposit.interest}</div>
              <div>{deposit.finuslugi && "✓"}</div>
              <div>{deposit.retiree && "✓"}</div>
              <div>{deposit.newClient && "✓"}</div>
              <div>{deposit.replenishment}
              <button onClick={handleClicklHide}>скрыть</button>
              <button onClick={handleClickRedirect }>редактировать</button>
              </div>
    </div>
  )
}

export default DepositItem