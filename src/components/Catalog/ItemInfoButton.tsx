import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from "./ItemInfoButton.module.scss";

interface itemInfoButtonProps {
    itemId: string | number;
}

export const ItemInfoButton = (props: itemInfoButtonProps) => {
    let match = useRouteMatch();
    return (
        <Link className={styles.view_more_button} to={`${match.url}/info/${props.itemId}`}>View more</Link>
    )
}