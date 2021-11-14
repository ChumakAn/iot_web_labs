import React from 'react'
import styles from './CatalogFilter.module.scss';

interface CatalogFilterProps {
    name: string;
    options: string[];
}
export const CatalogFilter = (props: CatalogFilterProps) => {
    return (
        <div className={styles.filter}>
            <label className={styles.label} htmlFor={props.name}> {props.name} </label>
            <select id={props.name}>
                {props.options.map((option) => (
                    <option value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}