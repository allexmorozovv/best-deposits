import React from 'react'
import { Bank } from '../../domain/bank'
import { Reorder } from 'framer-motion'
type PropsType = {
  bank: Bank
}
function FramerBank({bank}: PropsType) {
  return (
    <Reorder.Item 
    className='reorder-item'
    value={bank}
    whileDrag={{
      scale: 1.1,
      boxShadow:'   rgba(0,0,0,0.13) 2px 4px 6px'
    }}
    >
      <span  className='bank__framer'>
        {bank.name}
      </span>
      </Reorder.Item>
  )
}

export default FramerBank