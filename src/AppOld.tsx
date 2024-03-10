import React, { useState } from 'react';
import { Deposit, mockDeposits } from './domain/deposit';





function AppOld() {
  
// const[monthly, setMonthly] = useState<Deposit[]>(mockDeposits)
// const onlyMonthly = () => {
//   setMonthly(mockDeposits.filter(el=> el.interest === "monthly"))
// }
type InterestFilter = "no matter" | "monthly" | "finally"
type PeriodFilter = "3m" | "6m" | "1y" | "any"
type Filters = {
  period: string,
  interest: InterestFilter
}
const [interestFilter, setInterestFilter] = useState<InterestFilter>("no matter")
const [periodFilter, setPeriodFilter] = useState<PeriodFilter>("any")
const [finUslugi, setFinUslugi] = useState(false)

const changeInterestFilter = (filter: InterestFilter) => {
  setInterestFilter(filter)
}
const changePeriodFilter = (filter: PeriodFilter) => {
  setPeriodFilter(filter)
}

let deposits = mockDeposits

if(periodFilter === "3m") {
  deposits = mockDeposits.filter(dep => 30 <= dep.period && dep.period <= 150)
}
if(periodFilter === "6m") {
  deposits = mockDeposits.filter(dep =>  180 <= dep.period && dep.period <= 210 )
}
if(periodFilter === "1y") {
  deposits = mockDeposits.filter(dep =>  400 <= dep.period )
}

let interestFilteredDeposits = deposits

if(interestFilter === "monthly") {
  interestFilteredDeposits = deposits.filter(dep => dep.interest === "monthly")
}
if(interestFilter === "finally") {
  interestFilteredDeposits = deposits.filter(dep => dep.interest === "finally")
}

let finUslugiFilteredDeposits = interestFilteredDeposits
if(finUslugi){
  finUslugiFilteredDeposits = deposits.filter(dep => dep.finuslugi)
}

  



  return (
    <div className="App">
      <div>
        
      </div>
      <div>
        <button
         className={periodFilter === "any"?"period__btn-select":"period__btn"}
         onClick={()=> changePeriodFilter("any")}> любой</button>
        <button
         className={periodFilter === "3m"?"period__btn-select":"period__btn"}
         onClick={()=> changePeriodFilter("3m")}> 3 месяца</button>
        <button 
          className={periodFilter === "6m"?"period__btn-select":"period__btn"}
          onClick={()=> changePeriodFilter("6m")}> 6 месяцев</button>
        <button 
          className={periodFilter === "1y"?"period__btn-select":"period__btn"}
          onClick={()=> changePeriodFilter("1y")}> 1 год</button>
        <button 
          className={interestFilter === "monthly"?"interest__btn-select":"interest__btn"}
          onClick={()=>changeInterestFilter("monthly")}>ежемесячно</button>
        <button 
          className={interestFilter === "finally"?"interest__btn-select":"interest__btn"}
          onClick={()=>changeInterestFilter("finally")} >в конце</button>
        <button 
          className={interestFilter === "no matter"?"interest__btn-select":"interest__btn"}
          onClick={()=>changeInterestFilter("no matter")}>не важно</button>
          <input type='checkbox'checked = {finUslugi} onChange={()=>{setFinUslugi(!finUslugi)}}/> фин услуги
      </div>
      <div className='header__container'>
        <div>название</div>
        <div>маркетинговая<br />ставка</div>
        <div>месячная<br />ставка</div>
        <div>годовая<br />ставка</div>
        <div>срок</div>
        <div> сумма</div>
        <div>выплата %</div>
        <div>фин услуги</div>
        <div>для пенсионеров</div>
        <div>новым</div>
        <div>пополнение</div>

      </div>
      <div >
        {finUslugiFilteredDeposits.map(dep => {
          return (
            <div className='deposit__container'>
              <div>{dep.name}</div>
              <div>{dep.rate}%</div>
              <div>{0}%</div>
              <div>{0}%</div>
              <div>{dep.period} дня</div>
              <div>от {dep.min}<br />до {dep.max}</div>
              <div>{dep.interest}</div>
              <div>{dep.finuslugi && "✓"}</div>
              <div>{dep.retiree && "✓"}</div>
              <div>{dep.newClient}</div>
              <div>{dep.replenishment}</div>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default AppOld;
