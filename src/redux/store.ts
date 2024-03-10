import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import depositsSlice from "./depositsSlice";
import deposReducer from "./depositsSlice"

export const rootReducer = combineReducers({
  // deposits: depositsReduсer
  // depositsSlice
})

export const store = configureStore({
  // reducer: rootReducer
  reducer: {
    deposits: deposReducer
    
  }
})


export type RootState = ReturnType<typeof rootReducer>
// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch