import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./reducers/favouriteProductRecucer";
import hotReducer from "./reducers/hotProductReducer";
import newReducer from "./reducers/newProductReducer";
import commentReducer from "./reducers/commentReducer";

const store=configureStore({
    reducer:{
        favourite:favouriteReducer,
        hot:hotReducer,
        newPro:newReducer,
        comment:commentReducer
    }
})

export default store;