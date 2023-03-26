import {useState} from 'react'
import styles from '@/styles/input.module.sass'

export default function Checkbox({id, label, initial = false, color = null}) {
    const [checked, setChecked] = useState(initial)

    return (
        <>
            <label htmlFor={id} className={styles.checkbox}>
                {label}
                <input type="checkbox" id={id} checked={checked} onChange={() => setChecked(!checked)}/>
                {!color ?
                    <span></span> :
                    <span style={{borderColor: color, background: checked ? color : 'transparent'}}></span>}
            </label>
        </>
    )
}