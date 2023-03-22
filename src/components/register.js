import Link from 'next/link'
import Input from '@/components/forms/input'
import Button from '@/components/forms/button'
import styles from '@/styles/form.module.sass'

export default function Register() {
    return (
        <>
            <div className={styles.formContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.brandSection}>
                        <h4>CIRCUIT LAB</h4>
                        <div className={styles.slogan}>
                            <h2>Bizimle yolculuğa başlayın.</h2>
                            <p>Sanal atölyeyi kullanmak için kayıt ol ve neler yapabileceğini keşfet.</p>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <h2 className={styles.formTitle}>Kayıt ol</h2>
                        <p className={styles.signupRedirect}>
                            Zaten hesabın var mı? <Link href="/login">Giriş yap</Link>
                        </p>
                        <form method="POST">
                            <Input label="Ad" placeholder="Adınız" name="name"/>
                            <Input label="Soyad" placeholder="Soyadınız" name="surname"/>
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