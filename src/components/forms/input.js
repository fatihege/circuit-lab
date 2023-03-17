import inputStyles from '@/styles/input.module.sass'

export default function Input({label, placeholder, name, type = 'text'}) {
    return (
        <>
            <div className={inputStyles.inputBox}>
                <span className={inputStyles.label}>{label}</span>
                <input type={type} name={name} placeholder={placeholder || ''} className={inputStyles.input} autoComplete="off"/>
            </div>
        </>
    )
}