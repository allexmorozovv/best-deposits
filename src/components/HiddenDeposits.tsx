import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import DepositItem from './DepositItem'
import { IDeposit } from '../domain/deposit'
import { showTrueDeposits } from '../domain/trueDeposits'
import { banks } from '../domain/bank'
import { removeFromHiddenDeposits } from '../redux/depositsSlice'
import { Link } from 'react-router-dom'
import { selectHiddenDeposits } from '../redux/selectors'

function HiddenDeposits() {
  const dispatch = useAppDispatch()

  const hiddenBanksIds = useAppSelector(state => state.banks.hiddenBanks.map(bank => bank.id))
  const hiddenDepIds = useAppSelector(state => state.deposits.hiddenDepositsIds)
  const hiddenDeposits = useAppSelector(selectHiddenDeposits)

  // localStorage.setItem('hiddenDeposits', JSON.stringify(hiddenDeposits)) // ====================
  // если убрать депозит из архива, он пропадает, но если перезагрузить страницу, то снова появляется
  
  // const visibleHiddenDeposits = hiddenDeposits.filter(dep => hiddenBanksIds.includes(dep.bankId))
  // console.log('hidBankId', hiddenBanksIds);
  // console.log('hiddenDeposits', hiddenDeposits);
  // console.log('visibleHiddenDeposits', visibleHiddenDeposits);
  
  const trueHiddenDeposits =  showTrueDeposits(banks, hiddenDeposits)
  const handleClick = (deposit: IDeposit) => {
    dispatch(removeFromHiddenDeposits(deposit))
  }
  return (
    <div>
        <div>
        <Link to='/'> на главную </Link>
      </div>
     {trueHiddenDeposits.map(deposit => (
      <div>
        <DepositItem deposit={deposit}/>
        <button onClick = {() => handleClick(deposit) }>убрать из архива</button>
      </div>
     ))}
    </div>
  )
}

export default HiddenDeposits