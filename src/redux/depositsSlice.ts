import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Deposit } from "../domain/deposit";
import { fetchDeposits} from "../mockServer/getDeposits";
import { Bank2 } from "../domain/bank";
import { log } from "console";

 interface DepositsSliceState {
  deposits: Deposit[],
  // hiddenDepositsIds: Deposit["depositId"][],
  hiddenDepositsIds: Deposit["depositId"][],
  // hiddenDeposits : Deposit[]
}

const hiddenDeps: Deposit[] = JSON.parse(localStorage.getItem('hiddenDepositsIds')|| '[]')
console.log('hiddenDeps', hiddenDeps);

const hiddIds: Deposit["depositId"][] = hiddenDeps.filter(el => el).map(el => el.depositId) 

const initialState: DepositsSliceState = {
  deposits: [],
  hiddenDepositsIds: [...hiddIds],
  // hiddenDepositsIds: [],
  
}

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk, m1, m2, m3))

 
export const midleWare =  (store: any) => (next: any) => (action: any) => {
  // console.log('st', store.getState());
  // console.log('n', next);
  console.log('ac', action.type);
  // hideDeposit
  next(action);
  if(action.type === depositsSlice.actions.hideDeposit.type) {
    const hiddIds = store.getState().deposits.hiddenDepositsIds
    console.log('hiddIds', hiddIds);
    localStorage.setItem('hiddenDepositsIds', JSON.stringify(hiddIds))
  }
  else if(action.type === depositsSlice.actions.removeFromHiddenDeposits.type) {
    localStorage.removeItem('hiddenDepositsIds')
    const hidden = store.getState().deposits.hiddenDepositsIds
    localStorage.setItem('hiddenDepositsIds', JSON.stringify(hidden))
    console.log('hidden', hidden);
    
  }
};


const depositsSlice = createSlice({
  name:"deposits",
  initialState,
  reducers:{
    hideDeposit: (state, action: PayloadAction<Deposit>) => {
      state.hiddenDepositsIds.push(action.payload.depositId);
      // const arr = JSON.parse(JSON.stringify(state.deposits))
      // state.deposits.filter(el => el.depositId!==action.payload.depositId)
      // console.log('st dep',arr);
      
      // const hiddenDeposits = state.deposits.filter(dep => dep.depositId === action.payload.depositId )
      // localStorage.setItem('hiddenDeposits', JSON.stringify([...hiddenDeposits]))
    },
    removeFromHiddenDeposits: (state, action ) => {
      state.hiddenDepositsIds = state.hiddenDepositsIds.filter(id => id !== action.payload.depositId )
      console.log('actPay', action.payload);
      console.log('hiddenDepositsIds', state.hiddenDepositsIds);
      
    },
  
  }, 
  extraReducers: (builder)=> {
    builder.addCase(fetchDeposits.fulfilled,(state, action) => {
      state.deposits = [ ...action.payload]
    })
  }
})
export const {hideDeposit, removeFromHiddenDeposits} = depositsSlice.actions
export default depositsSlice.reducer

console.log("🤔",  depositsSlice.actions.hideDeposit.type);
