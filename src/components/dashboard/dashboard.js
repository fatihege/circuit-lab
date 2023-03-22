import {useRouter} from 'next/router'
import SidePanel from '@/components/dashboard/side-panel'
import {
    Overview,
    Calendar,
    Units,
    Exams,
    Homeworks,
    Sharing,
    Profile
} from '@/components/dashboard'
import styles from '@/styles/dashboard/dashboard.module.sass'

export default function Dashboard() {
    const router = useRouter()
    const {endpoint} = router.query
    
    return (
        <>
            <div className={styles.dashboardContainer}>
                <SidePanel router={router}/>
                <div className={styles.content}>
                    {
                        endpoint === 'overview' ? <Overview/> :
                        endpoint === 'calendar' ? <Calendar/> :
                        endpoint === 'units' ? <Units/> :
                        endpoint === 'exams' ? <Exams/> :
                        endpoint === 'homeworks' ? <Homeworks/> :
                        endpoint === 'sharing' ? <Sharing/> :
                        endpoint === 'profile' ? <Profile/> : ''
                    }
                </div>
            </div>
        </>
    )
}