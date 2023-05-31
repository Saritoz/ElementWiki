import { createSlice } from "@reduxjs/toolkit";

const StatusSlice = createSlice({
  name: "status",
  initialState: {
    statuses: {
      allStatus: null,
      basicStatus: null,
      currStatus: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getStatusesStart: (state) => {
      state.statuses.isFetching = true;
    },
    getStatusesSuccess: (state, action) => {
      state.statuses.allStatus = action.payload;
      state.statuses.isFetching = false;
      state.statuses.error = false;
    },
    getStatusesFailed: (state) => {
      state.statuses.isFetching = false;
      state.statuses.error = true;
    },
    getBasicStatusesStart: (state) => {
      state.statuses.isFetching = true;
    },
    getBasicStatusesSuccess: (state, action) => {
      state.statuses.basicStatus = action.payload;
      state.statuses.isFetching = false;
      state.statuses.error = false;
    },
    getBasicStatusesFailed: (state) => {
      state.statuses.isFetching = false;
      state.statuses.error = true;
    },
    getStatusStart: (state) => {
      state.statuses.isFetching = true;
    },
    getStatusSuccess: (state, action) => {
      state.statuses.currStatus = action.payload;
      state.statuses.isFetching = false;
      state.statuses.error = false;
    },
    getStatusFailed: (state) => {
      state.statuses.isFetching = false;
      state.statuses.error = true;
    },
  },
});

export const {
  getStatusesStart,
  getStatusesSuccess,
  getStatusesFailed,
  getBasicStatusesStart,
  getBasicStatusesSuccess,
  getBasicStatusesFailed,
  getStatusStart,
  getStatusSuccess,
  getStatusFailed,
} = StatusSlice.actions;

export default StatusSlice.reducer;
