import React, { ChangeEvent, useRef, useState } from 'react'
import { Deposit } from '../domain/deposit'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { changeDraft, copyDraft, deleteDraft } from '../redux/draftsSlice'
import { Reorder } from 'framer-motion'
import Checkbox from './Checkbox'

interface DraftFormProps {
  setGreen:(green:boolean)=> void
  green: boolean
  dep: Deposit
}

function DraftForm({ dep, green, setGreen }: DraftFormProps) {
  const topDeposits = useAppSelector(state => state.deposits.deposits)
  const[isChanged, setIsChanged] = useState(false)
  const dispatch = useAppDispatch()

  
  const serverDep = topDeposits.find(el => el.depositId === dep.depositId)
  console.log({serverDep});
  
  // console.log('topDep',topDeposits);
  // console.log('serDep',serverDep);
  // console.log('Dep',dep);
  


  function compareObjects<T extends object>(obj1: T, obj2: T): (keyof T)[] {
    const differences: Array<keyof T> = [];
    for (const key in obj1) {
      // if (Object.hasOwn(obj1, key)) {
        if(obj1[key] !== obj2[key]) {
          differences.push(key)
        }
        // }
      }
      return differences
    }


   
    const diffs = serverDep === undefined ? [] : compareObjects(serverDep, dep)

    // const handleClick = ()=> {
    //  compareObjects(dep, serverDep)
    // }


  
  



  // const dragItem = useRef<any>(null)
  // const dragOverItem = useRef<any>(null)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    // if(e) {
    //   setIsChanged(true)
    //   setGreen(true)
    // }
    dispatch(changeDraft({...dep,  name: e.target.value}))
  }
  const handleChangeRate = (e: ChangeEvent<HTMLInputElement>) => {
    const num = parseFloat(e.target.value)
    dispatch(changeDraft({...dep, rate: num}))
  }
  const handleChangeInterestToMonthly = () => {
    dispatch(changeDraft({...dep, interest: 'monthly'}))
  }
  const handleChangeInterestToFinally = () => {
    dispatch(changeDraft({...dep, interest: 'finally'}))
  }
  const handleChangePeriod = (e: ChangeEvent<HTMLInputElement>) => {
    const num = parseFloat(e.target.value)
    dispatch(changeDraft({...dep, period: num}))
  }
  const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
    const min = parseFloat(e.target.value)
    dispatch(changeDraft({...dep, min}))
  }
  const handleChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const max = parseFloat(e.target.value)
    dispatch(changeDraft({...dep, max}))
  }
  const hendleDeleteDraft = () => {
    dispatch(deleteDraft({...dep}))
  }
  const hendleCopyDraft = () => {
    dispatch(copyDraft({...dep}))
  }
  const handleChangeFinUslugi = (val: boolean) => {
    dispatch(changeDraft({...dep, finuslugi: !val}))
  }
  const handleChangeRetiree = (val: boolean) => {
    
    dispatch(changeDraft({...dep, retiree: !val}))
  }
  const handleChangeNewClient = (val: boolean) => {
    dispatch(changeDraft({...dep, newClient: !val}))
  }

// const handleSort = () => {
//   const depItemClone = [...depItem]
//   const temp = depItemClone[dragItem.current]
//   depItemClone[dragItem.current] = depItemClone[dragOverItem.current]
//   depItemClone[dragOverItem.current] = temp
//   setDraftItem(depItemClone)
// }




  return (
    <Reorder.Item value={dep}>
      <div className='draft__item-container'
      //  draggable
      //  onDragStart={(e)=> (dragItem.current = index)}
      //  onDragEnter={(e) => (dragOverItem.current = index)}
      //  onDragEnd={handleSort}
      //  onDragOver={(e)=> e.preventDefault()}
       >
        <div className= 'draft__item' >
          {/* <button onClick={handleClick}>click</button> */}
          <div className={serverDep === undefined?'active':'draft__item-inputs'}>
          {/* <input className={isChanged && green?'input-name__isChanged':'input-name'} value={dep.name}  onChange={handleChangeName}/> */}
          <input className={diffs.includes('name')?'input-name__isChanged':'input-name'} value={dep.name}  onChange={handleChangeName}/>
          <input className='input-name'  type="number" value={dep.rate}  onChange={handleChangeRate}/>
          <input type="radio" value={dep.interest} checked={dep.interest === 'monthly'} onChange={handleChangeInterestToMonthly}/> ежемесячно
          <input type="radio" value={dep.interest} checked={dep.interest === 'finally'} onChange={handleChangeInterestToFinally}/> в конце
          <input type="number" value={dep.period} onChange={handleChangePeriod}/>
          <input type="number" value={dep.min} onChange={handleChangeMin}/>
          <input type="number" value={dep.max} onChange={handleChangeMax}/>
          </div>
          <div className={serverDep === undefined?'active-checkBox':'draft__item-checkbox'}>
          <Checkbox value={dep.finuslugi} onChange={handleChangeFinUslugi} label={'ф'} /> 
          <Checkbox value={dep.retiree} onChange={handleChangeRetiree} label={'п'} /> 
          <Checkbox  value={dep.newClient} onChange={handleChangeNewClient} label={'н'}/>
          </div>
          <button onClick={hendleCopyDraft}>копировать</button>
          <button onClick={hendleDeleteDraft}>удалить</button>
        </div>
      </div>
    </Reorder.Item>
  )
}

export default DraftForm