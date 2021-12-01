import React from 'react'
import {useAppSelector} from '../../hooks/redux.store.hooks'
import {getCartProducts, getTotalPrice} from './cart.slice'
import {CartItem} from './CartItem';
import styles from './Cart.module.scss';


export const Cart: React.FC = () => {
    const totalPrice = useAppSelector(getTotalPrice);
    const cartProducts = useAppSelector(getCartProducts);


    return (
        <div>
            <h2>Cart</h2>

            {cartProducts.map(product => <CartItem key={product.id} id={product.id} model={product.title} price={product.price}
                                                   amount={product.amount}/>)}
            <div className={styles.price}>
            <h5> Total price {totalPrice} $</h5>
            </div>
        </div>
    );
}