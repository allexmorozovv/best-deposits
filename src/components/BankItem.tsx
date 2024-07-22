import React from 'react'
import { Bank2 } from '../domain/bank'
import { Link } from 'react-router-dom'
interface BankItemProps {
  bank: Bank2
}
function BankItem({bank}: BankItemProps) {
  return (
    <div>
      <Link to={`/banks/${bank.id}`}>
          <li >{bank.name}</li>
      </Link>
    </div>
  )
}

export default BankItem