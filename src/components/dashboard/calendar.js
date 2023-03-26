import CalendarWidget from '@/components/dashboard/calendar/calendar-widget'
import Categories from '@/components/dashboard/calendar/categories'
import styles from '@/styles/dashboard/calendar.module.sass'

export default function Calendar() {
    

    return (
        <>
            <div className={styles.calendarContainer}>
                <div className={styles.widgets}>
                    <CalendarWidget/>
                    <Categories/>
                </div>
            </div>
        </>
    )
}