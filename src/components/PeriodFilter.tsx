import React, { ChangeEvent, FormEvent,  useState }from 'react'
import { PeriodInputsType } from '../domain/filters'
interface PeriodFilterProps {
  value: [number, number],
  onChange: (value: [number, number]) => void
  inputOnChange:(value1: string, value2: string) => void

  periodInputsValue: PeriodInputsType
  setPeriodInputsValue:(periodInputsValue: PeriodInputsType) => void
}
 

function PeriodFilter({value, onChange, inputOnChange,  periodInputsValue,setPeriodInputsValue }: PeriodFilterProps) {
  // только инпуты с диапазоном срока вклада

  // const [inputsValue, setInputsValue] = useState({value1:"", value2:""})


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    // setInputsValue({...inputsValue, value1: event.target.value})
    setPeriodInputsValue({...periodInputsValue, inputValue1:event.target.value})
  }
  const handleChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    // setInputsValue({...inputsValue, value2: event.target.value})
    setPeriodInputsValue({...periodInputsValue, inputValue2:event.target.value})
  }

  return (
    <div className='period-filter__container'>
      <h3>Cрок вклада</h3>
      <div>Выберите срок вклада</div>
      <div>
         <button
          className={value[0] === 0 && value[1]=== Infinity?"period__btn-active":"period__btn"}
          onClick={()=>onChange([0, Infinity])}> любой</button>
        <button
        className={value[0] === 50 && value[1] === 140 ?"period__btn-active":"period__btn"}
        onClick={()=> onChange([50, 140])}> 3 месяца</button>
        <button 
          className={value[0] === 141 && value[1] === 210 ?"period__btn-active":"period__btn"}
          onClick={()=> onChange([141, 210])}> 6 месяцев</button>
        <button 
          className={value[0] === 211 && value[1] === 400 ?"period__btn-active":"period__btn"}
          onClick={()=> onChange([211, 400])}> 1 год</button>
      </div>
      {/* <div className='inputs-term__container'> */}
      <div className='inputs-term__text'>Или введите диапазон в днях</div>
        <form onSubmit={handleSubmit} >
          <div className='inputs-term__inputs'>
             {/* <input className='inputs-term__input' placeholder='от' value={inputsValue.value1} onChange={handleChangeInput1} />
             <input className='inputs-term__input' placeholder='до' value={inputsValue.value2} onChange={handleChangeInput2}/> */}
             <input className='inputs-term__input' placeholder='от' value={periodInputsValue.inputValue1} onChange={handleChangeInput1} />
             <input className='inputs-term__input' placeholder='до' value={periodInputsValue.inputValue2} onChange={handleChangeInput2}/>
            {/* <button className='inputs-term__btn' onClick={()=> inputOnChange(inputsValue.value1, inputsValue.value2)} >показать</button> */}
          </div>
        </form>
      {/* </div> */}
    </div>
  )
}

export default PeriodFilter