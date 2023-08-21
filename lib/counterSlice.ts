import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";

export interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementByNumber: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase("api/executeQuery/fulfilled", (state, action) => {
      console.log("Done...");
    });
  },
});

export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByNumber(amount));
  }, 4000);
};

export const { increment, incrementByNumber } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
