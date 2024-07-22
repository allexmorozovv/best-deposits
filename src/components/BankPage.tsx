import React  from 'react'
import { useParams } from 'react-router-dom';
import {  banks } from '../domain/bank';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import Form from './Form';
import { Deposit } from '../domain/deposit';

function BankPage() {
  const dispatch = useAppDispatch()

  const {id} = useParams()
  const bank = banks.filter(b => b.id === id).at(0)
  
  return (
    <div>
      <img src={bank?.logo}></img>
      <div>{bank?.name}</div>
      <Form />
    </div>
  )
}

export default BankPage