import Head from 'next/head'
import Login from '@/components/login'

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Giriş Yap - Circuit Lab</title>
            </Head>
            <Login/>
        </>
    )
}