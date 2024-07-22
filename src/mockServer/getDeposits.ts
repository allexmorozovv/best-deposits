import { Deposit } from "../domain/deposit"
import { getEvents } from "../mockDB/getEvents"
import { UpdateEvent } from "../domain/event";
import { createAsyncThunk } from "@reduxjs/toolkit";


// const bank2events = Object.groupBy(events.filter(event => event.craeateDate <= 18), event => event.bankId);
// const deposits = Object.values(bank2events).flatMap(events => events.sort((a, b) => a.craeateDate - b.craeateDate).at(-1).deposits)
export const fetchDepsForDraft = createAsyncThunk(
  "drafts/fetchDepForDraft",
  
  async(date: Date) => {
    return getDeposits(date)
  }
)
export const fetchDeposits = createAsyncThunk(
  'deposits/fetchDeposits',

  async (date: Date) => {
    return getDeposits(date)
  }
)


export  async function getDeposits(date: Date): Promise<Deposit[]>  {
  const eventsArray =  await getEvents()
  const eventsNotFuture = eventsArray.filter(event => new Date(event.createDate).getTime() <= new Date(date).getTime())
  const groupEvents: Record<UpdateEvent["bankId"], UpdateEvent[]> = {}
  for(const event of eventsNotFuture) {
    groupEvents[event.bankId] ??= [] 
    groupEvents[event.bankId].push(event)
  }
  const deposits = []
  for(const key in groupEvents) {
    const topEvent = groupEvents[key].sort((a, b)=> a.createDate.valueOf() - b.createDate.valueOf()).at(-1)
    deposits.push(...topEvent!.deposits)
    // deposits.push(...groupEvents[key].sort((a, b)=> a.createDate.valueOf() - b.createDate.valueOf()).at(-1)!.deposits)
  // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type
  }
  return deposits
}

