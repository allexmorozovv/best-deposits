import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { hideBank} from '../redux/banksSlice'
import { Bank2, banks } from '../domain/bank'
import BankItem from './BankItem'
import {  selectVisibleBanks } from '../redux/selectors'

function Banks() {
  const dispatch = useAppDispatch()

  const [query, setQuery] = useState('')

  
  // const hiddenBanks = useAppSelector(state => state.banks.hiddenBanks)
  // const hiddIds = hiddenBanks.map(b => b.id)
  // localStorage.setItem('hiddenBanks', JSON.stringify(hiddenBanks))// ---------------------------------------------------------------
  
  
  // https://blog.logrocket.com/react-re-reselect-better-memoization-cache-management/

  const visibleBanks: Bank2[] = useAppSelector(selectVisibleBanks)

  // const bnks = [...banks]
  // const visibleBanks: Bank2[] = useAppSelector(state => alternativeSelectVisibleBanks(state, bnks))
  // Cannot read properties of undefined (reading 'filter')

  // const visibleBanks: Bank2[] = useAppSelector(state => {
  //   console.log("====");
  //   return banks.filter(bank => !state.banks.hiddenBanks.includes(bank))
  // });

  


  

  const banksForSearch: Bank2[] = visibleBanks.filter((bank: Bank2) => bank.name.toLowerCase().includes(query))

  const handleHideBank = (bank: Bank2) => {
    dispatch(hideBank(bank))
  }
  // console.log('hid',JSON.parse( localStorage.getItem("hiddenBanks") || '[]'));
  
  return (
    <div>
      <div>
        <Link to='/'> на главную </Link>
      </div>
      <div>
        <Link to='banks-archive'> архив банков </Link>
      </div>
      <input type='text' placeholder='поиск...' onChange={(e)=> setQuery(e.target.value)}/>
      {banksForSearch.map((bank:any) => {
        return (
          <ul key={bank.id}>
            <BankItem bank={bank}/>
            <button onClick={()=> handleHideBank(bank)}>скрыть</button>
          </ul>
        )
      })}
    </div>
  )
}

export default Banks