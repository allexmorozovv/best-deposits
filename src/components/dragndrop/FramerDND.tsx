import React, { useState } from 'react'
import { Bank, banks, mockBanks } from '../../domain/bank'
import { Reorder } from 'framer-motion'
import FramerBank from './FramerBank'

function FramerDND() {
  const[list, setList] = useState<Bank[]>(mockBanks)
  return (
      <Reorder.Group is ='ol' axis='y' values={list}  onReorder={setList}>
        {list.map(bank=> <FramerBank key={bank.id} bank={bank}/>)}
      </Reorder.Group>
  )
}

export default FramerDND