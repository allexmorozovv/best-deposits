import { createAsyncThunk } from "@reduxjs/toolkit";
import { UpdateEvent } from "../domain/event";
import { saveEvent } from "../mockDB/saveEvent";

export const addEvent = createAsyncThunk(
  "deposits/addEvent",
  async(event: UpdateEvent)=>{
    return saveEvent(event);
  }
)
// export function addEvent(event: UpdateEvent) {
//   return saveEvent(event);
// }