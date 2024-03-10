import React from 'react'
import { Deposit, IDeposit } from '../domain/deposit'

type DepositsProps = {
  filteredDeposits: IDeposit[]
}
function Deposits({filteredDeposits}: DepositsProps) {

  return (
    <div>
        {filteredDeposits.map(dep => {
          return (
            <div className='deposit__container'>
              <div className='deposit__item' ><img className='img' src={dep.bankLogo}/>{dep.name}</div>
              <div className='deposit__item'>{dep.rate}%</div>
              <div>{0}%</div>
              <div>{0}%</div>
              <div>{dep.period} дня</div>
              <div>от {dep.min}<br />до {dep.max}</div>
              <div>{dep.interest}</div>
              <div>{dep.finuslugi && "✓"}</div>
              <div>{dep.retiree && "✓"}</div>
              <div>{dep.newClient && "✓"}</div>
              <div>{dep.replenishment}</div>
            </div>
          )
        })}
    </div>
  )
}

export default Deposits