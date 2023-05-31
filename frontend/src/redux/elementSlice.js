import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
  name: "element",
  initialState: {
    elements: {
      allElements: null,
      basicElements: null,
      currElement: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getElementsStart: (state) => {
      state.elements.isFetching = true;
    },
    getElementsSuccess: (state, action) => {
      state.elements.allElements = action.payload;
      state.elements.isFetching = false;
      state.elements.error = false;
    },
    getElementsFailed: (state) => {
      state.elements.isFetching = false;
      state.elements.error = true;
    },
    getBasicElementsStart: (state) => {
      state.elements.isFetching = true;
    },
    getBasicElementsSuccess: (state, action) => {
      state.elements.basicElements = action.payload;
      state.elements.isFetching = false;
      state.elements.error = false;
    },
    getBasicElementsFailed: (state) => {
      state.elements.isFetching = false;
      state.elements.error = true;
    },
    getElementStart: (state) => {
      state.elements.isFetching = true;
    },
    getElementSuccess: (state, action) => {
      state.elements.currElement = action.payload;
      state.elements.isFetching = false;
      state.elements.error = false;
    },
    getElementFailed: (state) => {
      state.elements.isFetching = false;
      state.elements.error = true;
    },
  },
});

export const {
  getElementsStart,
  getElementsSuccess,
  getElementsFailed,
  getBasicElementsStart,
  getBasicElementsSuccess,
  getBasicElementsFailed,
  getElementStart,
  getElementSuccess,
  getElementFailed,
} = elementSlice.actions;

export default elementSlice.reducer;
