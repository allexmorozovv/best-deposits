import React from 'react'
import HeaderDeposits from './HeaderDeposits'
import Deposits from './Deposits'
import Filters from './Filters'
import { event4, events } from '../domain/event'
import { addEvent } from '../mockServer/addEvent'
import { showTrueDeposits } from '../domain/trueDeposits'
import { banks } from '../domain/bank'
import { TermDepositType } from '../domain/filters'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Deposit } from '../domain/deposit'
import { selectHiddenDeposits } from '../redux/selectors'

function MainPage() {
  const dispatch = useAppDispatch()
  
  const hiddenBanksIds = useAppSelector(state => state.banks.hiddenBanks.map(bank => bank.id))
  // console.log('hb',hiddenBanks);
  
  const hiddenDepIds = useAppSelector(state => state.deposits.hiddenDepositsIds)
  const hiddenDeposits = useAppSelector(selectHiddenDeposits)
  console.log('hidDep', hiddenDeposits);
  
  // localStorage.setItem('hiddenDeposits', JSON.stringify(hiddenDeposits)) /// --------------------------------------------------
  const topDeposits = useAppSelector(state => state.deposits.deposits.filter(dep => !hiddenDepIds.includes(dep.depositId)))

  // visibleDeposits === убирают с главной депозиты скрытых банков
  // const visibleDeposits = topDeposits.filter((dep: Deposit) => !hiddenBanksIds.includes(dep.bankId))




  const finUslugi = useAppSelector(state => state.filters.finUslugi) 
  const retiree = useAppSelector(state => state.filters.retiree)
  const newClient = useAppSelector(state => state.filters.newClient)

  const periodInput1 = useAppSelector(state => state.filters.period.inputValue1)
  const periodInput2 = useAppSelector(state => state.filters.period.inputValue2)
  const interest = useAppSelector(state => state.filters.interest)
  const depositSum = useAppSelector(state => state.filters.sumDeposit)

  



  const depositTerm: TermDepositType = {
    min: periodInput1 === "" ? -Infinity : Number(periodInput1),
    max: periodInput2 === "" ? Infinity : Number(periodInput2)
  };

  // const trueDeposits =  showTrueDeposits(banks, visibleDeposits)
  const trueDeposits =  showTrueDeposits(banks, topDeposits)
    
  const filteredDeposits = trueDeposits
    .filter(deposit => deposit.period >= depositTerm.min && deposit.period <= depositTerm.max)
    .filter(deposit => interest.name === "no matter" || deposit.interest === interest.name)
    .filter(deposit => depositSum !== "" ? deposit.min <= Number(depositSum) && deposit.max >= Number(depositSum): deposit)
    .filter(deposit => finUslugi ? true : !deposit.finuslugi)
    .filter(deposit => retiree ? true : !deposit.retiree)
    .filter(deposit => newClient ? true : !deposit.newClient)
    .sort((a, b) => b.rate - a.rate)

  // =============================================================================================================
  //===============================================================================================================

  const createHandleClick = () => {
    localStorage.setItem('events', JSON.stringify(events))
  }
  const addHandleClick = () => {
    const events = JSON.parse(localStorage.getItem("events") || '[]')
    events.push(event4)
    localStorage.setItem('events', JSON.stringify(events))
  }
  const clearHandleClick = () => {
    localStorage.clear()
  }
  const getHandleClick = () => {
    const ls = JSON.parse(localStorage.getItem("events") || '[]')
    console.log('events ', ls);
    
  }

  
  const addEventHandleClick = () => {
    dispatch(addEvent(event4))
  }


return (
  
  <div className="main__container">
    <div>
      <Link to="banks">список банков</Link>
    </div>
    <div>
      <Link to="deposit-archive">архив депозитов</Link>
    </div>
    {/* <div>
      <Link to="framer-dnd">dragNdrop_1</Link>
    </div> */}
    {/* <div>
      <Link to="kit-dnd">dragNdrop_2</Link>
    </div> */}
    <div className='filters__wrapper'>
      <Filters />
    </div>
    <div className='btns'>
      <button style={{background:"pink"}} onClick={createHandleClick}>создать ls</button>
      <button style={{background:"pink"}} onClick={clearHandleClick}>очистить ls</button>
      {/* <button style={{background:"pink"}} onClick={getHandleClick}>показать ls</button> */}
      <button style={{background:"aqua"}} onClick={addEventHandleClick}>addEvent</button>
    </div>
    <HeaderDeposits/>
    <Deposits filteredDeposits={filteredDeposits}/>
  </div>
  
);
}

export default MainPage