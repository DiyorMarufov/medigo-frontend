import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IToken {
  token: string | null;
}

const initialState: IToken = {
  token: localStorage.getItem("token") || null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, actions: PayloadAction<string | null>) => {
      state.token = actions.payload;
      if (actions.payload) {
        localStorage.setItem("token", actions.payload);
      } else {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
