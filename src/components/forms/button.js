import styles from '@/styles/input.module.sass'

export default function Button({label}) {
    return (
        <>
            <div className={styles.buttonBox}>
                <button className={styles.button}>{label}</button>
            </div>
        </>
    )
}