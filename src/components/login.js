import Link from 'next/link'
import Input from '@/components/forms/input'
import Button from '@/components/forms/button'
import loginStyles from '../styles/login.module.sass'

export default function Login() {
    return (
        <>
            <div className={loginStyles.loginContainer}>
                <div className={loginStyles.wrapper}>
                    <div className={loginStyles.brandSection}>
                        <h4>TEKNOFEST</h4>
                        <div className={loginStyles.slogan}>
                            <h2>Sanal atölyene hoşgeldin.</h2>
                            <p>Hemen giriş yap ve sanal atölyeni kullanmaya başla.</p>
                        </div>
                    </div>
                    <div className={loginStyles.form}>
                        <h2 className={loginStyles.formTitle}>Giriş yap</h2>
                        <p className={loginStyles.signupRedirect}>
                            Hesabın yok mu? <Link href="/register">Kayıt ol</Link>
                        </p>
                        <form method="POST">
                            <Input label="Kullanıcı adı" placeholder="Kullanıcı adı ya da e-posta" name="username"/>
                            <Input label="Şifre" placeholder="Parolanızı girin" name="password" type="password"/>
                            <p className={loginStyles.forgotPassword}>
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