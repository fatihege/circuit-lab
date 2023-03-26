import {useState} from 'react'
import {NextIcon, PrevIcon} from '@/components/vectors'
import styles from '@/styles/dashboard/calendar.module.sass'

export default function CalendarWidget() {
    const months = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
    ]
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [date, setDate] = useState(new Date())
    const [currentMonth, setCurrentMonth] = useState(date.getMonth())
    const [currentYear, setCurrentYear] = useState(date.getFullYear())
    const [lastDay, setLastDay] = useState(new Date(currentYear, currentMonth + 1, 0).getDate())

    const getDayOfWeek = day => {
        let newDay = day - 1
        if (newDay === -1) newDay = 6
        return newDay
    }

    const updateMonth = (prev = false) => {
        let month,
            year = date.getFullYear()

        if (prev) {
            if (currentMonth - 1 < 0) {
                month = 11
                year = currentYear - 1
            }
            else month = currentMonth - 1
        } else {
            if (currentMonth + 1 > 11) {
                month = 0
                year = currentYear + 1
            }
            else month = currentMonth + 1
        }

        setDate(new Date(year, month, 1))
        setCurrentMonth(month)
        setCurrentYear(year)
        setLastDay(new Date(year, month + 1, 0).getDate())
    }

    return (
        <div className={styles.calendarWidget}>
            <div className={styles.header}>
                <div className={styles.date}>
                    {months[currentMonth]} {currentYear}
                </div>
                <div className={styles.controls}>
                    <button className={styles.control} onClick={() => updateMonth(true)}>
                        <PrevIcon/>
                    </button>
                    <button className={styles.control} onClick={() => updateMonth()}>
                        <NextIcon/>
                    </button>
                </div>
            </div>
            <div className={styles.days}>
                <div className={styles.indicatorRow}>
                    <ul>
                        <li>Pzt</li>
                        <li>Sal</li>
                        <li>Çrş</li>
                        <li>Prş</li>
                        <li>Cum</li>
                        <li>Cmt</li>
                        <li>Pzr</li>
                    </ul>
                </div>
                <div className={styles.daysRow}>
                    <ul>
                        {(() => {
                            const result = []
                            const firstDay = getDayOfWeek(new Date(currentYear, currentMonth, 1).getDay())
                            const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate()
                            if (firstDay > 0)
                                for (let i = firstDay; i > 0; i--)
                                    result.push(<li key={result.length} className={styles.inactive}>
                                        {prevMonthLastDay - i + 1}
                                    </li>)

                            const date = new Date()
                            for (let i = 0; i < lastDay; i++)
                                result.push(<li key={result.length} className={
                                    i + 1 === selectedDate.getDate() &&
                                    currentMonth === selectedDate.getMonth() &&
                                    currentYear === selectedDate.getFullYear() ? styles.active :
                                        i + 1 === date.getDate() &&
                                        currentMonth === date.getMonth() &&
                                        currentYear === date.getFullYear() ? styles.today : ''}
                                    onClick={() => {setSelectedDate(new Date(currentYear, currentMonth, i + 1))}}
                                    >{i + 1}</li>)

                            for (let i = 0; result.length !== 42; i++) {
                                result.push(<li key={result.length} className={styles.inactive}>{i + 1}</li>)
                                if (result.length === 42) break
                            }

                            return result
                        })()}
                    </ul>
                </div>
            </div>
        </div>
    )
}