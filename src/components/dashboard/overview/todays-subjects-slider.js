import Link from 'next/link'
import {useRef, useState} from 'react'
import {ExamIcon, NextIcon, PrevIcon, ReportIcon, UnitIcon} from '@/components/vectors'
import styles from '@/styles/dashboard/overview.module.sass'

export default function TodaysSubjectsSlider() {
    const [subjects, setSubjects] = useState([
        {
            type: 'unit',
            title: 'Mikrodenetleyici Kartlar',
            link: '#',
        },
        {
            type: 'unit',
            title: 'Kodlamaya Giriş',
            link: '#',
        },
        {
            type: 'unit',
            title: 'C++ Uygulamaları',
            link: '#',
        },
        {
            type: 'unit',
            title: 'LED Kullanımı ve Uygulamalar',
            link: '#',
        },
        {
            type: 'test',
            title: 'Değerlendirme Testi',
            link: '#',
        },
    ])
    const slider = useRef()

    const scroll = (next = false) => {
        const rect = slider.current.getBoundingClientRect()
        const scrollAmount = rect.width - (rect.width % 216)

        slider.current.scrollTo({
            left: slider.current.scrollLeft + (next ? scrollAmount : -scrollAmount),
            behavior: 'smooth',
        })
    }

    return (
        <div className={styles.todaysSubjectsSlider}>
            <div className={`${styles.sliderControl} ${styles.prev}`} onClick={() => scroll()} tabIndex={8}>
                <PrevIcon/>
            </div>
            <div className={`${styles.sliderControl} ${styles.next}`} onClick={() => scroll(true)} tabIndex={9}>
                <NextIcon/>
            </div>
            <div className={styles.todaysSubjectsSliderWrapper} ref={slider}>
                {subjects.map((s, i) => (
                    <Link href={s.link} key={i} className={styles.subject}>
                        <div className={styles.icon}>
                            {s.type === 'test' ? <ExamIcon/> : <UnitIcon/>}
                        </div>
                        <div className={styles.title}>
                            {s.title}
                        </div>
                        <div className={styles.type}>
                            {s.type === 'test' ? 'Sınav' : 'Ünite'}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}