import React, {useState} from 'react'
import {useAppSelector} from '../../hooks/redux.store.hooks'
import {getCartProducts, getTotalPrice} from './cart.slice'
import {CartItem} from './CartItem';
import styles from './Cart.module.scss';
import {OrderForm} from "./OrderForm";


export const Cart: React.FC = () => {
    const totalPrice = useAppSelector(getTotalPrice);
    const cartProducts = useAppSelector(getCartProducts);
    const [order, setOrder] = useState(false);

    return (
        <>
            {order ? (
                <OrderForm/>
            ) : (<div className={styles.cart}>
                    <h1 className={styles.title}>Cart</h1>
                    {cartProducts.length == 0 ? (
                        <h3>Add something to cart!</h3>
                    ) : (

                        <>
                            <div>
                                <h2>Cart</h2>

                                {cartProducts.map(product => <CartItem key={product.id} id={product.id}
                                                                       model={product.title} price={product.price}
                                                                       amount={product.amount}/>)}
                                <div className={styles.price}>
                                    <h5> Total price {totalPrice} $</h5>
                                </div>
                                <div className={styles.price}>
                                    <button className={styles.button} onClick={() => setOrder(!order)}>Make order
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}