import inputStyles from '@/styles/input.module.sass'

export default function Button({label}) {
    return (
        <>
            <div className={inputStyles.buttonBox}>
                <button className={inputStyles.button}>{label}</button>
            </div>
        </>
    )
}