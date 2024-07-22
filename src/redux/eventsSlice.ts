import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UpdateEvent } from "../domain/event";
import { addEvent } from "../mockServer/addEvent";


const initialState: UpdateEvent[] = []

export const eventsSlice = createSlice({
  name:'events',
  initialState,
  reducers:{

  },
  extraReducers:(builder) => {
    builder.addCase(addEvent.fulfilled,(state, action: any) => {
      state.push(action.payload)
      // action === undefined ==> Argument of type 'unknown' is not assignable to parameter of type 'WritableDraft<UpdateEvent>
    })
  }
})

export default eventsSlice.reducer