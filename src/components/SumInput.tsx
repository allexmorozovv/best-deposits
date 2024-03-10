import React, { ChangeEvent, useState } from 'react'

interface SumInputProps {
 onClick: (value: number) => void

 sumInputValue:string
 setSumInputValue:(val:string) => void
 
 
 

}

function SumInput({onClick,sumInputValue, setSumInputValue}: SumInputProps) {
  const [value, setValue] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setSumInputValue(event.target.value)
  }
 
  return (
    <div>
      <h3>Cумма  вклада</h3>
      <div>Введите сумму</div>
        {/* <input className='sum__input' type='text' value={value} onChange={handleChange} placeholder='0'  />  */}
        <input className='sum__input' type='text' value={sumInputValue} onChange={handleChange2} placeholder='0'  /> 
        {/* <button className='sum__btn' onClick={()=> onClick(Number(value))}>показать</button> */}
      </div>
  )
}

export default SumInput