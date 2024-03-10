import React from 'react'
interface SortProps{
  // value:null|boolean,
  setValue:(value:boolean)=>void
}

function Sort({setValue}: SortProps) {
  return (
    <div className='sort__container'>
      сортировать по ставке 
      <button className='sort__btn' onClick={()=> setValue(true)}>по возрастанию</button>
      <button className='sort__btn' onClick={()=> setValue(false)}>по убыванию</button>
    </div>
  )
}

export default Sort