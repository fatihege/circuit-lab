import Link from 'next/link'
import Input from '@/components/forms/input'
import Button from '@/components/forms/button'
import styles from '@/styles/form.module.sass'

export default function Login() {
    return (
        <>
            <div className={styles.formContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.brandSection}>
                        <h4>CIRCUIT LAB</h4>
                        <div className={styles.slogan}>
                            <h2>Sanal atölyene hoşgeldin.</h2>
                            <p>Hemen giriş yap ve sanal atölyeni kullanmaya başla.</p>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <h2 className={styles.formTitle}>Giriş yap</h2>
                        <p className={styles.signupRedirect}>
                            Hesabın yok mu? <Link href="/register">Kayıt ol</Link>
                        </p>
                        <form method="POST">
                            <Input label="Kullanıcı adı" placeholder="Kullanıcı adı ya da e-posta" name="username"/>
                            <Input label="Şifre" placeholder="Parolanızı girin" name="password" type="password"/>
                            <p className={styles.forgotPassword}>
                                <Link href="/forgot-password">Şifremi unuttum</Link>
                            </p>
                            <Button label="Giriş yap"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}