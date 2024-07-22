import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import BankItem from './BankItem'
import { removeFromHiddenBanks } from '../redux/banksSlice'
import { Bank2 } from '../domain/bank'
import { Link } from 'react-router-dom'

function HiddenBanks() {
  const hiddenBanks = useAppSelector(state => state.banks.hiddenBanks)
  localStorage.setItem('hiddenBanks', JSON.stringify(hiddenBanks)) // ------------------------------------------------
  const hidd = JSON.parse( localStorage.getItem("hiddenBanks") || '[]') // -----------------------------------------------
  const dispatch = useAppDispatch()
  // console.log('hbbbbb', hiddenBanks);
  
  const handleRemoveFromHiddenBanks = (bank: Bank2) => {
    dispatch(removeFromHiddenBanks(bank))
    // dispatch(removeDepositFromHiddenBanks(bank))
  }
  return (
    <div>
       <div>
        <Link to='/'> на главную </Link>
      </div>
       <div>
        <Link to='/banks'> на страницу банков </Link>
      </div>
      {hidd.map((bank:any)=>(
        <div>
          <BankItem bank={bank}/>
          <button onClick={()=> handleRemoveFromHiddenBanks(bank) } >убрать из архива</button>
        </div>
      ))}
    </div>
  )
}

export default HiddenBanks