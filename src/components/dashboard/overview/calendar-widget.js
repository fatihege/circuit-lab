import {useState} from 'react'
import styles from '@/styles/dashboard/overview.module.sass'

export default function OverviewCalendarWidget({router}) {
    const months = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
    ]
    const [date] = useState(new Date())
    const [currentMonth] = useState(date.getMonth())
    const [currentYear] = useState(date.getFullYear())
    const [lastDay] = useState(new Date(currentYear, currentMonth + 1, 0).getDate())

    const getDayOfWeek = day => {
        let newDay = day - 1
        if (newDay === -1) newDay = 6
        return newDay
    }

    return (
        <div className={styles.calendarWidget}>
            <div className={styles.calendarDate}>
                {months[currentMonth]} {currentYear}
            </div>
            <div className={styles.calendarTable} onClick={() => router.push('/dashboard/calendar')}>
                <ul>
                    {(() => {
                        const result = []
                        const firstDay = getDayOfWeek(new Date(currentYear, currentMonth, 1).getDay())
                        const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()

                        if (firstDay > 0)
                            for (let i = firstDay; i > 0; i--)
                                result.push(<li key={result.length} className={styles.inactiveDay}>
                                    {prevMonthLastDay - i + 1}
                                </li>)

                        const date = new Date()
                        for (let i = 0; i < lastDay; i++)
                            result.push(<li key={result.length} className={
                                i + 1 === date.getDate() &&
                                currentMonth === date.getMonth() &&
                                currentYear === date.getFullYear() ? styles.activeDay : ''}>{i + 1}</li>)

                        for (let i = 0; result.length !== 42; i++) {
                            result.push(<li key={result.length} className={styles.inactiveDay}>{i + 1}</li>)
                            if (result.length === 42) break
                        }

                        return result
                    })()}
                </ul>
            </div>
        </div>
    )
}