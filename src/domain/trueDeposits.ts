import { AllBanks, Bank, mockBanks } from "./bank";
import { Deposit, mockDeposits } from "./deposit"


 export const showTrueDeposits = (banks: AllBanks[], deposits: Deposit[]) => {
  const depositsWithBank = deposits.map(dep => {
    return (
      {...dep,
         bankName: banks.filter(bank => bank.id === dep.bankId).map(bank => bank.name).join(''),
         bankLogo: banks.filter(bank => bank.id === dep.bankId).map(bank => bank.logo).join('')
        }
    )
  })
  return depositsWithBank
}
