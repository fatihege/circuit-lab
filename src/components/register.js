import Link from 'next/link'
import Input from '@/components/forms/input'
import Button from '@/components/forms/button'
import loginStyles from '../styles/login.module.sass'

export default function Register() {
    return (
        <>
            <div className={loginStyles.loginContainer}>
                <div className={loginStyles.wrapper}>
                    <div className={loginStyles.brandSection}>
                        <h4>TEKNOFEST</h4>
                        <div className={loginStyles.slogan}>
                            <h2>Bizimle yolculuğa başlayın.</h2>
                            <p>Sanal atölyeyi kullanmak için kayıt ol ve neler yapabileceğini keşfet.</p>
                        </div>
                    </div>
                    <div className={loginStyles.form}>
                        <h2 className={loginStyles.formTitle}>Kayıt ol</h2>
                        <p className={loginStyles.signupRedirect}>
                            Zaten hesabın var mı? <Link href="/login">Giriş yap</Link>
                        </p>
                        <form method="POST">
                            <Input label="Kullanıcı adı" placeholder="Kullanıcı adınız" name="username"/>
                            <Input label="E-posta" placeholder="E-posta adresinizi girin" name="email"/>
                            <Input label="Şifre" placeholder="Parolanızı girin" name="password" type="password"/>
                            <Input label="Şifreni onayla" placeholder="Parolanızı tekrar girin" name="password_confirm" type="password"/>
                            <Button label="Kayıt ol"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}