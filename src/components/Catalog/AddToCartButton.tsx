import React from 'react';
import { useAppDispatch } from '../../hooks/redux.store.hooks';
import { addToCart } from '../Cart/cart.slice';
import styles from './AddToCartButton.module.scss';

interface addToCartProps {
    id: number | string;
    title: string;
    price: number;
}

export const AddToCartButton = (props: addToCartProps) => {
    const dispatch = useAppDispatch();
    const itemToAdd = {
        id: props.id,
        title: props.title,
        price: props.price
    }

    return <button className={styles.button} onClick={() => dispatch(addToCart(itemToAdd))}>Add to Cart</button>
}