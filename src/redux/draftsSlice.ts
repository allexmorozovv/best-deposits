import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { Deposit } from "../domain/deposit";
import { BankId } from "../domain/bank";
import { fetchDepsForDraft } from "../mockServer/getDeposits";
import { UpdateEvent } from "../domain/event";
import { access } from "fs";

const initialState: Partial<Record<BankId, Deposit[]>> = {}

const draftsSlice = createSlice({
  name:"drafts",
  initialState,
  reducers: {
    changePosition: (state, action:PayloadAction<Deposit[]>)=> {
      const bankId = action.payload.map(el => el.bankId).at(0)
      const bankId2 = action.payload
      console.log('bi', bankId);
      if(bankId !== undefined){
        const proxy = JSON.parse(JSON.stringify({...state}))
        proxy[bankId].push( action.payload)

        console.log('proxy', proxy);
        console.log('state', current(state));
        
        console.log('state[bankId]',current(state[bankId]));
        console.log('proxy[bankId]', proxy[bankId]);
        console.log('action.payload', action.payload);
      }
      
      
      //  state = action.payload
      
    },
    changeDraft:(state, action: PayloadAction<Deposit>)=> {
      const bankId = action.payload.bankId
      state[bankId] = state[bankId]?.map(dep => dep.depositId === action.payload.depositId ? action.payload : dep)
    },
    deleteDraft:(state, action: PayloadAction<Deposit>)=> {
      const bankId = action.payload.bankId
      state[bankId] = state[bankId]?.filter(dep => dep.depositId !== action.payload.depositId)
    },
    copyDraft:(state, action: PayloadAction<Deposit>) => {
      const bankId = action.payload.bankId
      // proxy object
      const copyProxy = state[bankId]?.filter(dep => dep.depositId === action.payload.depositId).at(0)
      const copyDep = JSON.parse(JSON.stringify({...copyProxy, depositId: crypto.randomUUID()}))
      
      const ids = state[bankId]?.map(dep => dep.depositId)
      const index = ids?.indexOf(action.payload.depositId)
      
      if(state[bankId] !== undefined && index !== undefined) {
        state[bankId]?.splice(index + 1, 0, {...copyDep})
      } 
    },
    createDraft: (state, action: PayloadAction<BankId>) => {
      const bankId = action.payload
      const newDep: Deposit = {
        depositId: crypto.randomUUID(),
        rate: Infinity,
        name: '',
        interest:'annual',
        period: -Infinity,
        bankId,
        min: -Infinity,
        max: Infinity,
        replenishment: 0,
        newClient: false,
        finuslugi: false,
        retiree: false,
        url: '',
        note: ''
      } 

      if(bankId in state) {
        state[bankId]?.push(newDep)
      } else {
        state[bankId] ??= []
        state[bankId]?.push(newDep)
      }
    }
  },
  extraReducers:(builder) => {
    builder.addCase(fetchDepsForDraft.fulfilled, (state: any, action) => {
      for(const dep of action.payload) {
        state[dep.bankId] ??= []
        state[dep.bankId].push(dep)
      }
    })
  }
})

export const {changeDraft, deleteDraft, copyDraft, createDraft, changePosition} = draftsSlice.actions
export default draftsSlice.reducer