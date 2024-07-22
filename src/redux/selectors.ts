import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Bank2, banks } from "../domain/bank";
// import {createCachedSelector} from 're-reselect';
import {createCachedSelector} from 're-reselect';
import { Deposit } from "../domain/deposit";


export const selectAllBanks = (state: RootState): Bank2[] => state.banks.banks
export const selectHiddenBanks = (state: RootState): Bank2[] => state.banks.hiddenBanks

export const selectAllDeposits = (state: RootState): Deposit[] => state.deposits.deposits
export const selectAllHiddenDepositsIds = (state: RootState): Deposit["depositId"][] => state.deposits.hiddenDepositsIds




export const selectVisibleBanks = createSelector(
  selectHiddenBanks,
(hiddenBanks) => {
    return banks.filter(bank => !hiddenBanks.includes(bank))
  } 
)
export const selectHiddenDeposits = createSelector(
  selectAllDeposits,
  selectAllHiddenDepositsIds,
  (deposits, hiddenIds) => deposits.filter(dep => hiddenIds.includes(dep.depositId))
)


