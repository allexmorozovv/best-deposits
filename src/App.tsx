import React, { useEffect, useState } from 'react';
import { Deposit, IDeposit, mockDeposits } from './domain/deposit';
import Deposits from './components/Deposits';
import HeaderDeposits from './components/HeaderDeposits';
import Filters from './components/Filters';
import {InterestType, PeriodInputsType, PeriodButtonsType, TermDepositType } from './domain/filters';
import {  showTrueDeposits } from './domain/trueDeposits';
import { banks, mockBanks } from './domain/bank';
import Sort from './components/Sort';






function App() {

  // superCheckbox !!     ок?   online     replenishment
  // sum component !!     локальный стейт в компоненте ок?
  // sort by rate  !!     sort by income + варианты(???)   
  // diapason period inputs        event.preventDefault onSubmit  
  // interest filter radio   посмотреть InterestFilters => Filters => App  InterestFilters types  form no form
  // logo bank !!   типы банков и депозитов
  // main button 
  // InterestFilters handleChange event type

  // interestCalc rate
  

  // 
  const [depositSum, setDepositSum] = useState(0)
  const [depositTerm, setDepositTerm] = useState<TermDepositType>({min: 0, max: Infinity})
  
  const [sumInputValue, setSumInputValue] = useState('')
  const [depositSum2, setDepositSum2] = useState<number>(0)
  const [periodInputsValue, setPeriodInputsValue] = useState<PeriodInputsType>({inputValue1:"", inputValue2:""})
  const [depositTerm2, setDepositTerm2] = useState<TermDepositType>({min: 0, max: Infinity})


  const [interestFilter, setInterestFilter] = useState<InterestType>("no matter")
  const [periodFilter, setPeriodFilter] = useState<PeriodButtonsType>([0, Infinity])

  const [finUslugi, setFinUslugi] = useState(true)
  const [retiree, setRetiree] = useState(false)
  const [newClient, setNewClient] = useState(true)

  const [sortByRate, setSortByRate] = useState<null|boolean>(null)
  //  
 

  // депозиты + банк лого
  const trueDeposits = showTrueDeposits(banks, mockDeposits)
  // console.log('td',trueDeposits);
  
  const [filteredDeposits, setFilteredDeposits] = useState<IDeposit[]>(trueDeposits)
  // console.log('fd', filteredDeposits);
  
  

  const inputDepositSum = (amount: number) => {
    setDepositSum(amount)
  }
  
  const changePeriodFilter = (filter: PeriodButtonsType) => {
    setPeriodFilter(filter)
  }
  const changeInterestFilter = (filter: InterestType) => {
    setInterestFilter(filter)
  }
  const changeFinUslugiFilter = () => {
    setFinUslugi(!finUslugi)
  }
  const changeRetireeFilter = () => {
    setRetiree(!retiree)
  }
  const changeNewClientFilter = () => {
    setNewClient(!newClient)
  }


 
  const inputDepositTerm = (value1: string, value2: string) => {
    if(value1 !== '') {
      setDepositTerm({...depositTerm, min: Number(value1)})
    }
    if(value2 !== '') {
      setDepositTerm({...depositTerm, max: Number(value2)})
    }
  }

  const inputDepositTerm2 = (value1: string, value2: string) => {
    if(value1 !== '') {
      setDepositTerm2({...depositTerm2, min: Number(value1)})
    }
    if(value2 !== '') {
      setDepositTerm2({...depositTerm2, max: Number(value2)})
    }
  }




  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  // }

 
  const handleClick = () => {
   setDepositSum2(Number(sumInputValue))
   inputDepositTerm2(periodInputsValue.inputValue1, periodInputsValue.inputValue2)
  }
 
  

//   Type '(value: number) => void' is not assignable to type 'MouseEventHandler<HTMLButtonElement>'.
//   Types of parameters 'value' and 'event' are incompatible.
//     Type 'MouseEvent<HTMLButtonElement, MouseEvent>' is not assignable to type 'number'.ts(2322)
// index.d.ts(2380, 9): The expected type comes from property 'onClick' which is declared here on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'
// (property) React.DOMAttributes<HTMLButtonElement>.onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined



  // ==================================================================================

  useEffect(() => {
    let newList = [...trueDeposits]

    // if(depositTerm.min !== 0) {
    //   newList = newList.filter(dep => dep.period >= depositTerm.min)
    // }
    // if(depositTerm.max !== Infinity) {
    //   newList = newList.filter(dep => dep.period <= depositTerm.max)
    // }
    // if(depositSum !== 0) {
    //   newList = newList.filter(dep =>    dep.min <= depositSum && dep.max >= depositSum )
    // }

    
    if(depositSum2 > 0) {
      newList = newList.filter(dep =>    dep.min <= depositSum2 && dep.max >= depositSum2 )
    }
    if(depositTerm2.min !== 0) {
      newList = newList.filter(dep => dep.period >= depositTerm2.min)
    }
    if(depositTerm2.max !== Infinity) {
      newList = newList.filter(dep => dep.period <= depositTerm2.max)
    }
   
    if(periodFilter[0] === 50 && periodFilter[1] === 140) {
      newList = newList.filter(dep => 50 <= dep.period && dep.period <= 140)
    }
    if(periodFilter[0] === 141 && periodFilter[1] === 210) {
      newList = newList.filter(dep =>  180 <= dep.period && dep.period <= 210 )
    }
    if(periodFilter[0] === 211 && periodFilter[1] === 400) {
      newList = newList.filter(dep =>  400 <= dep.period )
    }
    if(interestFilter === "monthly") {
      newList = newList.filter(dep => dep.interest === "monthly")
    }
    if(interestFilter === "finally") {
      newList = newList.filter(dep => dep.interest === "finally")
    }
    if(!finUslugi) {
      newList = newList.filter(dep => !dep.finuslugi)
    }
    if(!retiree) {
      newList = newList.filter(dep => !dep.retiree)
    }
    if(!newClient) {
      newList = newList.filter(dep => !dep.newClient)
    }
    if(sortByRate) {
      newList = newList.slice(0).sort((a, b) => a.rate > b.rate ? -1 : 1)
    }
    if(sortByRate === false) {
      newList = newList.slice(0).sort((a, b) => a.rate > b.rate ? 1 : -1)
    }
    setFilteredDeposits(newList)
    
  }, [depositTerm, depositSum, periodFilter, interestFilter, finUslugi, retiree, newClient, sortByRate, depositSum2, depositTerm2])

  //============================================================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log('periodInputsValue', periodInputsValue);
  // console.log('depositSum2', depositSum2);
  
  return (
    
    <div className="main__container">
      <div className='filters__wrapper'>
        <Filters 
          periodFilter={periodFilter} 
          interestFilter={interestFilter}
          changePeriodFilter={changePeriodFilter}
          changeInterestFilter={changeInterestFilter}
          finUslugi={finUslugi}
          retiree={retiree}
          newClient={newClient}
          changeFinUslugiFilter={changeFinUslugiFilter}
          changeRetireeFilter={changeRetireeFilter}
          changeNewClientFilter={changeNewClientFilter}

          inputDepositSum={inputDepositSum}
          inputDepositTerm={inputDepositTerm}

          sumInputValue={sumInputValue}
          setSumInputValue={setSumInputValue}
          periodInputsValue={periodInputsValue}
          setPeriodInputsValue={setPeriodInputsValue}
        />
        <div className='main__btn-div'>
          <button className='main__btn'  onClick={handleClick}>Подобрать</button>
        </div>
      </div>
      
      <Sort  setValue={setSortByRate}/>
      <HeaderDeposits/>
      <Deposits filteredDeposits={filteredDeposits}/>
    </div>
    
  );
}
export default App;
