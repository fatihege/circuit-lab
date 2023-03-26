import styles from '@/styles/input.module.sass'

export default function Input({label, placeholder, name, type = 'text'}) {
    return (
        <>
            <div className={styles.inputBox}>
                <span className={styles.label}>{label}</span>
                <input type={type} name={name} placeholder={placeholder || ''} className={styles.input} autoComplete="off"/>
            </div>
        </>
    )
}