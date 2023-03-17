import Head from 'next/head'
import Register from '@/components/register'

export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>Kayıt Ol - Circuit Lab</title>
            </Head>
            <Register/>
        </>
    )
}