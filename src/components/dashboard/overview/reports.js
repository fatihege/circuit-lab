import Link from 'next/link'
import {useState} from 'react'
import {ExamIcon, UnitIcon} from '@/components/vectors'
import styles from "@/styles/dashboard/overview.module.sass";

export default function ReportsSection() {
    const [reports, setReports] = useState([
        {
            type: 'unit',
            title: 'Mikrodenetleyici Kartlar',
            link: '#',
            progress: 85,
        },
        {
            type: 'unit',
            title: 'Kodlamaya Giriş',
            link: '#',
            progress: 20,
        },
        {
            type: 'unit',
            title: 'LED Uygulamaları',
            link: '#',
            progress: 45,
        },
        {
            type: 'test',
            title: 'Değerlendirme Sınavı',
            link: '#',
            progress: 100,
        },
    ])

    return (
        <div className={styles.reportsGrid}>
            {reports.map((r, i) => (
                <Link href={r.link} key={i} className={styles.report}>
                    <div className={styles.icon}>
                        {r.type === 'test' ? <ExamIcon/> : <UnitIcon/>}
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            {r.title}
                        </div>
                        <div className={styles.progressBarWrapper}>
                            <div className={styles.progressBar}>
                                <div className={styles.progressBarFill} style={{width: `${r.progress}%`}}></div>
                            </div>
                            <span className={styles.progress}>%{r.progress}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}