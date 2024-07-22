import React from 'react'
import { Deposit, IDeposit } from '../domain/deposit'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { hideDeposit } from '../redux/depositsSlice'
import DepositItem from './DepositItem'

type DepositsProps = {
  filteredDeposits: IDeposit[]
}
function Deposits({filteredDeposits}: DepositsProps) {
  return (
    <div>
        {filteredDeposits.map(deposit => {
          return (
            <div key={deposit.depositId} >
              <DepositItem deposit={deposit}/>
            </div>
          )
        })}
    </div>
  )
}

export default Deposits