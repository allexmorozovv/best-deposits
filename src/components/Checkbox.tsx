import React from 'react'

interface CheckboxProps {
  value: boolean
  onChange: (v: boolean) => void
  label: string
}

function Checkbox({value, onChange, label}: CheckboxProps) {

  return (
      <div className={value ?'checkbox__item-active':'checkbox__item' }>
        <input type = 'checkbox' checked={value} onChange={() => onChange(value)}/>{label}
      </div>
  )
}

export default Checkbox