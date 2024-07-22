import { Bank2, mockBanks } from "./bank";
import { Deposit, mockDeposits } from "./deposit"


export  const showTrueDeposits = (banks: readonly Bank2[], deposits: Deposit[]) => {

  const depositsWithBank = deposits.map(dep => {
    const bank = banks.find(bank => bank.id === dep.bankId);
    return (
      {
        ...dep,
        bankName: bank?.name ?? "",
        bankLogo: bank?.logo ?? "",
      }
    )
  })
  return depositsWithBank
}
