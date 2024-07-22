import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {  InterestType2, InterestTypes2, PeriodInputsType } from "../domain/filters";


export interface FiltersState {
  finUslugi: boolean,
  retiree: boolean,
  newClient: boolean,
  period: PeriodInputsType,
  interest: InterestType2,
  sumDeposit: string
}
const initialState: FiltersState = {
  finUslugi : true,
  retiree: false,
  newClient:true,
  period: {
    inputValue1:'',
    inputValue2:''
  },
  interest: InterestTypes2[0],
  sumDeposit: ''
    
  
} satisfies FiltersState as FiltersState

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFinUslugi: (state) => {
      state.finUslugi = !state.finUslugi
    },
    changeRetiree: (state) => {
      state.retiree = !state.retiree
    },
    changeNewclient: (state) => {
      state.newClient = !state.newClient
    },
    choosePeriod: (state, action: PayloadAction<PeriodInputsType>) => {
      state.period = action.payload
    },
    setInterest: (state, action: PayloadAction<InterestType2>) => {
      state.interest = action.payload
    },
    setDepositSum: (state, action: PayloadAction<string>) => {
      state.sumDeposit = action.payload
    }
  }
})

export const {changeFinUslugi, changeRetiree, changeNewclient, choosePeriod, setInterest, setDepositSum} = filtersSlice.actions
export default filtersSlice.reducer
