import React, { useRef, useState } from 'react'
import { mockBanks } from '../../domain/bank'

function KitDND() {
  const [list, setList] = useState(mockBanks)
  const dragItem = useRef<number>(0)
  const draggedOverItem = useRef<number>(0)
  const handleSort = () => {
    const listClone = [...list]
    const temp = listClone[dragItem.current]
    listClone[dragItem.current] = listClone[draggedOverItem.current]
    listClone[draggedOverItem.current] = temp
    setList(listClone)

  }

  
  return (
    <div>
      {list.map((bank, index) =>(
        <div className='bank__framer'
          draggable
          onDragStart={()=> (dragItem.current = index)}
          onDragEnter={()=> (draggedOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e)=> e.preventDefault()}
        >
          {bank.name}
        </div>
      ))}
    </div>
  )
}

export default KitDND