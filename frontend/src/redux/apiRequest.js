import { instanstAxios as axios } from "./axios_config";
import {
  getBasicElementsFailed,
  getBasicElementsStart,
  getBasicElementsSuccess,
  getElementFailed,
  getElementsFailed,
  getElementsStart,
  getElementsSuccess,
  getElementStart,
  getElementSuccess,
} from "./elementSlice";
import {
  getStatusesStart,
  getStatusesFailed,
  getStatusesSuccess,
  getBasicStatusesStart,
  getBasicStatusesSuccess,
  getBasicStatusesFailed,
  getStatusStart,
  getStatusSuccess,
  getStatusFailed,
} from "./statusSlice";

export const getAllElements = async (dispatch) => {
  dispatch(getElementsStart());
  try {
    const res = await axios.get("/element/getall");
    dispatch(getElementsSuccess(res.data));
  } catch (error) {
    dispatch(getElementsFailed());
  }
};

export const getBasicElements = async (dispatch) => {
  dispatch(getBasicElementsStart());
  try {
    const res = await axios.get("/element/getbasic");
    dispatch(getBasicElementsSuccess(res.data));
  } catch (error) {
    dispatch(getBasicElementsFailed());
  }
};

export const getElement = async (name, dispatch) => {
  dispatch(getElementStart());
  try {
    const res = await axios.post("/element/getelement", { name: name });
    dispatch(getElementSuccess(res.data));
  } catch (error) {
    dispatch(getElementFailed());
  }
};

export const getAllStatus = async (dispatch) => {
  dispatch(getStatusesStart());
  try {
    const res = await axios.get("/status/getall");
    dispatch(getStatusesSuccess(res.data));
  } catch (error) {
    dispatch(getStatusesFailed());
  }
};

export const getBasicStatuses = async (dispatch) => {
  dispatch(getBasicStatusesStart());
  try {
    const res = await axios.get("/status/getbasic");
    dispatch(getBasicStatusesSuccess(res.data));
  } catch (error) {
    dispatch(getBasicStatusesFailed());
  }
};

export const getStatus = async (name, dispatch) => {
  dispatch(getStatusStart());
  try {
    const res = await axios.post("/status/getstatus", { name: name });
    dispatch(getStatusSuccess(res.data));
  } catch (error) {
    dispatch(getStatusFailed());
  }
};
