import { RootState } from '../../redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataProps } from '../Catalog/Catalog';

interface cartProduct extends dataProps {
    amount: number;
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as cartProduct[],
    reducers: {
        addToCart: (state, action: PayloadAction<dataProps>) => {
            let productIndex = state.findIndex(product => product.id == action.payload.id)
            if(productIndex !== -1) {
                state[productIndex].amount += 1;
            } else {
                state.push({...action.payload, amount: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<string | number>) => {
            let productIndex = state.findIndex(product => product.id == action.payload)
            if(state[productIndex].amount > 1) {
                state[productIndex].amount -= 1;
            } else {
                return state.filter(product => product.id !== action.payload)
            }
        }
    }
})

export const getCartProducts = (state: RootState) => state.cart;
// @ts-ignore
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc:any, next:any) => acc +=(next.amount * next.price), 0)

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;