import {useRouter} from 'next/router'
import SidePanel from '@/components/dashboard/side-panel'
import Overview from '@/components/dashboard/overview'
import Calendar from '@/components/dashboard/calendar'
import Units from '@/components/dashboard/units'
import Exams from '@/components/dashboard/exams'
import Sharing from '@/components/dashboard/sharing'
import Profile from '@/components/dashboard/profile'
import styles from '@/styles/dashboard.module.sass'

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
                        endpoint === 'sharing' ? <Sharing/> :
                        endpoint === 'profile' ? <Profile/> : ''
                    }
                </div>
            </div>
        </>
    )
}