import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./reducers/favouriteProductRecucer";
import hotReducer from "./reducers/hotProductReducer";
import newReducer from "./reducers/newProductReducer";

const store=configureStore({
    reducer:{
        favourite:favouriteReducer,
        hot:hotReducer,
        newPro:newReducer
    }
})

export default store;