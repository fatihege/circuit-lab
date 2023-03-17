import Head from 'next/head'
import Dashboard from '@/components/dashboard'

export default function DashboardEndpoint() {
    return (
        <>
            <Head>
                <title>Teknofest App</title>
            </Head>
            <Dashboard/>
        </>
    )
}