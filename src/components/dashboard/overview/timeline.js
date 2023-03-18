import {ClockIcon, ExamIcon} from '@/components/vectors'
import styles from '@/styles/dashboard/overview.module.sass'

export default function TimelineSection() {
    return (
        <div className={styles.timeline}>
            <div className={`${styles.timelineItem} ${styles.past}`}>
                <div className={styles.icon}>
                    <ClockIcon/>
                </div>
                <div className={styles.title}>
                    Mikrodenetleyici kartlar
                </div>
                <div className={styles.time}>
                    07:00
                </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.past}`}>
                <div className={styles.icon}>
                    <ClockIcon/>
                </div>
                <div className={styles.title}>
                    Arduino Uno
                </div>
                <div className={styles.time}>
                    08:00
                </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.active}`} onClick={() => window.open('#')}>
                <div className={styles.icon}>
                    <ClockIcon/>
                </div>
                <div className={styles.title}>
                    Editör tanıtımı
                </div>
                <div className={styles.time}>
                    09:00
                </div>
            </div>
            <div className={styles.timelineItem}>
                <div className={styles.icon}>
                    <ClockIcon/>
                </div>
                <div className={styles.title}>
                    LED uygulaması
                </div>
                <div className={styles.time}>
                    10:00
                </div>
            </div>
            <div className={styles.timelineItem}>
                <div className={styles.icon}>
                    <ExamIcon/>
                </div>
                <div className={styles.title}>
                    Değerlendirme
                </div>
                <div className={styles.time}>
                    11:00
                </div>
            </div>
        </div>
    )
}