import {useRouter} from 'next/router'
import CalendarWidget from '@/components/dashboard/overview/calendar-widget'
import TodaysSubjectsSlider from '@/components/dashboard/overview/todays-subjects-slider'
import ReportsSection from '@/components/dashboard/overview/reports'
import TimelineSection from '@/components/dashboard/overview/timeline'
import {GreetingsVector} from '@/components/vectors'
import styles from '@/styles/dashboard/overview.module.sass'

export default function Overview() {
    const router = useRouter()

    return (
        <>
            <div className={styles.overviewContainer}>
                <div className={styles.overviewGrid}>
                    <div className={styles.timelineSection}>
                        <h2 className={styles.timelineTitle}>Genel bakış</h2>
                        <span className={styles.timelineDescription}>Bugünün zaman çizelgesi</span>
                        <TimelineSection/>
                    </div>
                    <div className={styles.mainSection}>
                        <div className={styles.topGrid}>
                            <CalendarWidget router={router}/>
                            <div className={styles.greetingsWidget}>
                                <div className={styles.backgroundVector}>
                                    <GreetingsVector/>
                                    <div className={styles.textLayer}>
                                        <h2>Merhaba, Fatih!</h2>
                                        <p>
                                            Derslerini ve ödevlerini kontrol etmeyi unutma.
                                            <span>İyi günler!</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.progressSection}>
                            <div className={styles.todaysSubjects}>
                                <h3 className={styles.sectionTitle}>Bugünün Konuları</h3>
                                <TodaysSubjectsSlider/>
                            </div>
                            <div className={styles.reports}>
                                <h3 className={styles.sectionTitle}>Raporlar</h3>
                                <ReportsSection/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}