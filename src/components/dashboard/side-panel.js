import {useRouter} from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import styles from '@/styles/dashboard/side-panel.module.sass'

export default function SidePanel({router}) {
    const {endpoint} = router.query
    const [menuItems, setMenuItems] = useState([
        {
            type: 'link',
            title: 'Genel Bakış | Sanal Devrem',
            icon: 'O',
            label: 'Genel Bakış',
            tag: 'overview',
        },
        {
            type: 'link',
            title: 'Takvim | Sanal Devrem',
            icon: 'C',
            label: 'Takvim',
            tag: 'calendar',
        },
        {
            type: 'category',
            label: 'Sınıf',
        },
        {
            type: 'link',
            title: 'Üniteler | Sanal Devrem',
            icon: 'U',
            label: 'Üniteler',
            tag: 'units',
        },
        {
            type: 'link',
            title: 'Sınavlar | Sanal Devrem',
            icon: 'E',
            label: 'Sınavlar',
            tag: 'exams',
        },
        {
            type: 'category',
            label: 'Sosyal',
        },
        {
            type: 'link',
            title: 'Paylaşım | Sanal Devrem',
            icon: 'S',
            label: 'Paylaşım',
            tag: 'sharing',
        },
        {
            type: 'link',
            title: 'Profil | Sanal Devrem',
            icon: 'P',
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

    const getActiveLink = () => menuItems.find(i => i.tag === activeLink)

    return (
        <>
            <Head>
                <title>{title || 'Sanal Devrem'}</title>
            </Head>
            <div className={styles.sidePanelContainer}>
                <div className={styles.logo}>
                    SANAL DEVREM
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