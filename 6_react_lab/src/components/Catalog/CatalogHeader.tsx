import React from 'react';
import { Button } from '../Button/Button';
import { CatalogFilter } from './CatalogFilter';
import styles from './CatalogHeader.module.scss';

export const CatalogHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.filters}>
                <CatalogFilter name='Title' options={['ASC', 'DESC']} />
                <CatalogFilter name='Price' options={['ASC', 'DESC']} />
            </div>
            <Button label='Apply' />
        </div>
    )
}