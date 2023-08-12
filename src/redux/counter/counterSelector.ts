import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CounterState } from "./counterSlice";

const selectCounterSlice = (state: RootState) => state.counter;

export const selectCounterValue = createSelector(
  [selectCounterSlice],
  (edge: CounterState) => edge.value
);
