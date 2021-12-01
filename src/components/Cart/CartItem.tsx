import { useAppDispatch } from '../../hooks/redux.store.hooks';
import { removeFromCart } from './cart.slice';
import styles from  './CartItem.module.scss';

interface CartItemProps {
    id: string | number;
    model: string;
    price:number;
    amount: any;
}

export function CartItem(props: CartItemProps) {
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = (productId: string | number) => dispatch(removeFromCart(productId))

    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
            <div>
            <img className={styles.itemImage} src="https://content.rozetka.com.ua/goods/images/big/194271151.jpg" alt="item"/>
            </div>
            <div className={styles.itemInfo}>
            <span>{props.model}</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa officia exercitationem ad
                    ipsum dolorum ut corporis est eius soluta harum, magni omnis voluptatibus esse ducimus
                    quasi sed temporibus et aperiam? Doloribus cumque nesciunt rem vero?</p>
                <p> Price: {props.price * props.amount} $ </p>
            <p> Amount : {props.amount}</p>
            </div>
            </div>
            <div className={styles.wrapperButton}>
            <button className={styles.removeButton} onClick={() => handleRemoveFromCart(props.id)}>Remove from cart</button>
</div>
        </div>
    )
}