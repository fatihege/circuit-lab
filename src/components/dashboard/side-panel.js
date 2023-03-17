import {useRouter} from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import styles from '@/styles/dashboard/side-panel.module.sass'
import {
    OverviewIcon,
    CalendarIcon,
    UnitsIcon,
    ExamsIcon,
    SharingIcon,
    ProfileIcon
} from '@/components/icons'

export default function SidePanel({router}) {
    const {endpoint} = router.query
    const [menuItems, setMenuItems] = useState([
        {
            type: 'link',
            title: 'Genel Bakış | Circuit Lab',
            icon: <OverviewIcon/>,
            label: 'Genel Bakış',
            tag: 'overview',
        },
        {
            type: 'link',
            title: 'Takvim | Circuit Lab',
            icon: <CalendarIcon/>,
            label: 'Takvim',
            tag: 'calendar',
        },
        {
            type: 'category',
            label: 'Sınıf',
        },
        {
            type: 'link',
            title: 'Üniteler | Circuit Lab',
            icon: <UnitsIcon/>,
            label: 'Üniteler',
            tag: 'units',
        },
        {
            type: 'link',
            title: 'Sınavlar | Circuit Lab',
            icon: <ExamsIcon/>,
            label: 'Sınavlar',
            tag: 'exams',
        },
        {
            type: 'category',
            label: 'Sosyal',
        },
        {
            type: 'link',
            title: 'Paylaşım | Circuit Lab',
            icon: <SharingIcon/>,
            label: 'Paylaşım',
            tag: 'sharing',
        },
        {
            type: 'link',
            title: 'Profil | Circuit Lab',
            icon: <ProfileIcon/>,
            label: 'Profil',
            tag: 'profile',
        },
    ])
    const [activeLink, setActiveLink] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        if (endpoint) setActiveLink(endpoint)
    }, [endpoint])

    useEffect(() => {
        const exists = menuItems.find(i => i.tag === activeLink)
        if (!exists && activeLink !== '') {
            setTitle('')
            router.push(menuItems[0].tag)
        } else setTitle(exists ? exists.title : '')
    }, [activeLink])

    return (
        <>
            <Head>
                <title>{title || 'Circuit Lab'}</title>
            </Head>
            <div className={styles.sidePanelContainer}>
                <div className={styles.logo}>
                    CIRCUIT LAB
                </div>
                <div className={styles.navigation}>
                    {menuItems.map((m, i) => m.type === 'link' ? (
                        <Link key={i} href={m.tag} className={`${styles.menuItem} ${activeLink === m.tag ? styles.active : ''}`}>
                            <div className={styles.icon}>
                                {m.icon}
                            </div>
                            <span className={styles.label}>
                                {m.label}
                            </span>
                        </Link>
                    ) : (
                        <div key={i} className={styles.category}>
                            {m.label}
                        </div>
                    ))}
                </div>
                <div className={styles.logoutSection}>
                    <button className={styles.logout} onClick={() => router.push('/login')}>
                        Çıkış yap
                    </button>
                </div>
            </div>
        </>
    )
}