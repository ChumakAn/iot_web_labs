import {configureStore} from '@reduxjs/toolkit';
import cart from "../components/Cart/cart.slice";
export const store = configureStore({
    reducer:{
        cart
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;