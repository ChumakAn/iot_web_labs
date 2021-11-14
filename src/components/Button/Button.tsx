import styles from "./Button.module.scss"

interface ButtonProps {
    label: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <>
        <button className={styles.button}>
            {props.label}
        </button>
        </>
    )
}

