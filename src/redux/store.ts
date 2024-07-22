import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";
import depositsSlice, { midleWare } from "./depositsSlice";
import eventsSlice from "./eventsSlice";
import draftsSlice from "./draftsSlice";
import { fetchDeposits, fetchDepsForDraft } from "../mockServer/getDeposits";
import hiddenBanksSlice, { hideBank } from "./banksSlice";

export const store = configureStore({
  reducer:{
    filters: filtersSlice,
    deposits: depositsSlice,
    events: eventsSlice,
    drafts: draftsSlice,
    banks: hiddenBanksSlice
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(midleWare)
  // middleware?: ((getDefaultMiddleware: CurriedGetDefaultMiddleware<S>) => M) | M
})
// `middleware: (gDM) => gDM().concat(logger, apiMiddleware, yourCustomMiddleware)`

store.dispatch(fetchDepsForDraft(new Date()))
store.dispatch(fetchDeposits(new Date()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch