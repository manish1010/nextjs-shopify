import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import productReducer from './features/productSlice';
import pdpReducer from './features/pdpSlice';



export const store = configureStore({

    reducer:{
        auth:authReducer,
        product:productReducer,
        pdp:pdpReducer
    }
});