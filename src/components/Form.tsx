import React, { useState } from 'react'
import { Deposit } from '../domain/deposit'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BankId, isBankId } from '../domain/bank'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import DraftForm from './DraftForm'
import { changeDraft, changePosition, createDraft } from '../redux/draftsSlice'
import { addEvent } from '../mockServer/addEvent'
import { Reorder } from 'framer-motion'
import { store } from '../redux/store'
import { UpdateEvent } from '../domain/event'
import { fetchDeposits } from '../mockServer/getDeposits'



function Form () {
  const[green, setGreen] = useState(false)
  const draftsDeposits: Partial<Record<BankId, Deposit[]>> = useAppSelector(state => state.drafts)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const {id} = useParams()
  
  if(!isBankId(id)) {
    return <div>Нет такого Id у банка. Попробуйте еще раз</div>
  }
  const drafts = draftsDeposits[id] ?? [];
 

  

  const handleCreateDraft = () => {
      dispatch(createDraft(id))
  }
  const handleSaveDraft = () => {
    const newEvent: UpdateEvent = {
      bankId: id,
      deposits: drafts,
      createDate: new Date()
    }
    // setGreen(false)
    dispatch(addEvent(newEvent))
    .then(() => {
      dispatch(fetchDeposits(new Date()))
    })
    .then(()=> {
      navigate("/")
    })
    
  }

  return (
    <div>
      <Reorder.Group is="ol" axis='y' values={drafts} onReorder={()=> dispatch(changePosition(drafts))}>
        {drafts.map((dep: Deposit, index: number) => (
          <div key={dep.depositId}>
            <DraftForm dep={dep} green={green} setGreen={setGreen}/>
          </div>
        ))}
      </Reorder.Group>  
        <button onClick={handleCreateDraft}>добавить </button>  
        <button onClick={handleSaveDraft}>сохранить</button>
        {/* <button onClick={()=> dispatch(changePosition(drafts))}>id</button> */}
        {/* <button onClick={()=> dispatch(changeDrafts(drafts))}>id</button> */}
    </div>
  )
}

export default Form