import {
  CaseReducer,
  PayloadAction,
  createSlice,
  createAction,
} from "@reduxjs/toolkit";

const name = "core";
const initialState = {} as ICoreState;

const setToken = createAction(`${name}/setToken`);

// Case reducers
const updateTokenReducer: CaseReducer<ICoreState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  return {
    ...state,
    token: payload,
  };
};

const coreSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateToken: updateTokenReducer,
  },
});

export const coreFeature = name;
export const coreActions = {
  ...coreSlice.actions,
  setToken,
};
export const coreReducer = coreSlice.reducer;
