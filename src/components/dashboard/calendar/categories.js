import Checkbox from '@/components/forms/checkbox'
import styles from '@/styles/dashboard/calendar.module.sass'

export default function Categories() {
    return (
        <>
            <div className={styles.categories}>
                <h2>Kategoriler</h2>
                <ul>
                    <li>
                        <Checkbox id="category-1" initial={true} label="Category 1" color={'#ff5858'}/>
                    </li>
                    <li>
                        <Checkbox id="category-2" initial={true} label="Category 2" color={'#248cff'}/>
                    </li>
                    <li>
                        <Checkbox id="category-3" initial={true} label="Category 3" color={'#00ec53'}/>
                    </li>
                </ul>
            </div>
        </>
    )
}