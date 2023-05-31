import {configureStore} from "@reduxjs/toolkit";
import elementSlice from "./elementSlice";
import statusSlice from "./statusSlice";

export default configureStore({
    reducer: {
        elementStore: elementSlice,
        statusStore: statusSlice
    }
})