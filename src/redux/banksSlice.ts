import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Bank2, banks } from "../domain/bank"
interface BankSlice{
  banks: Bank2[],
  hiddenBanks:  Bank2[]
}

const initialState: BankSlice = {
  hiddenBanks: JSON.parse(localStorage.getItem("hiddenBanks") || '[]'),
  banks: [...banks]
}
const banksSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    hideBank: (state, action: PayloadAction<Bank2>) => {
      state.hiddenBanks.push(action.payload)
    },
    removeFromHiddenBanks: (state, action: PayloadAction<Bank2>) => {
      state.hiddenBanks = state.hiddenBanks.filter(bank => bank.id !== action.payload.id)
  }
  }
})
export const {hideBank, removeFromHiddenBanks} = banksSlice.actions
export default banksSlice.reducer