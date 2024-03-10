import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IDeposit {
  depositId: string
  rate: number,
  interest: {
    monthly: number,
    annual: number,
    finally: number,
  },
  payout: {
    capitalization: string,
    frequency: string,
  },
  period: {
    years: number,
    days: number
  },
  bankName: string,
  bankLocation: string,
  bankRank: number,
  bankRating: string,
  depositName: string,
  minDeposit: number,
  note: string,
  url: string
}
interface IDepositsList extends Array<IDeposit> {}
type DepositListType = IDeposit[]

const deposit1: IDeposit = {
  depositId: "1",
  rate: 17.85,
  interest: {
    monthly: 17.59,
    annual: 19.08,
    finally: 17.85,
  },
  payout: {
    capitalization: 'выплата',
    frequency: "в конце",
  },
  period: {
    years: 0.25,
    days: 91
  },
  bankName: "АК Барс",
  bankLocation: "в 66 городах",
  bankRank: 18,
  bankRating: "ruA",
  depositName: "Долгожданная весна",
  minDeposit: 10,
  note: "максимум 100к",
  url: "# url"
  // url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/"
}
const deposit2: IDeposit = {
  depositId: "2",
  rate: 17.85,
  interest: {
    monthly: 17.59,
    annual: 19.08,
    finally: 17.85,
  },
  payout: {
    capitalization: 'выплата',
    frequency: "в конце",
  },
  period: {
    years: 0.25,
    days: 91
  },
  bankName: "АК Барс",
  bankLocation: "в 66 городах",
  bankRank: 18,
  bankRating: "ruA",
  depositName: "Долгожданная весна",
  minDeposit: 10,
  note: "максимум 100к",
  url: "# url"
  // url: "https://www.akbars.ru/individuals/deposits/dolgozhdannaya-vesna/"
}

const depositsList: DepositListType = [deposit1, deposit2]

const initialState: DepositListType = depositsList

 export const depositsSlice = createSlice({
  name: "deposits",
  initialState,
  reducers:{
    addDep: (state,action: PayloadAction<any>) => {
      
    }
  }
})

export const { addDep } = depositsSlice.actions
export default depositsSlice.reducer


// const { actions, reducer } = depositsSlice
// export const { save } = actions;
// export default reducer;