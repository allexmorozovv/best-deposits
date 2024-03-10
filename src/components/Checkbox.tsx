import React from 'react'
interface CheckboxProps {
  value: boolean[]
  onChange: (() => void)[]
}
function Checkbox({value, onChange}: CheckboxProps) {
  return (
    <div>
      <h3>Другие фильтры</h3>
      <div>Добавьте фильтры</div>
      <div className='checkbox__wrapper'>
        <div className={value[0] ?'checkbox__item-active':'checkbox__item' }>
          <input  type='checkbox'checked = {value[0]} onChange={onChange[0]}/> фин услуги
        </div>
        <div className={value[1] ?'checkbox__item-active':'checkbox__item' }>
          <input type='checkbox'checked = {value[1]} onChange={onChange[1]}/> пенсия
        </div>
        <div className={value[2] ?'checkbox__item-active':'checkbox__item' }>
          <input type='checkbox'checked = {value[2]} onChange={onChange[2]}/> новым
        </div>
      </div>
    </div>
  )
}

export default Checkbox