import TgIcon from '@/public/footer/tg-icon.svg';
import EmailIcon from '@/public/footer/email-icon.svg';
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles['footer-text']}>
                <span>
                © 2024 ФуфелМаркет.РФ — платформа для честных сделок.<br/>Покупайте и продавайте легко, удобно и безопасно.
                </span>
            </div>
            <div className={styles['footer-icons']}>
                <EmailIcon/>
                <TgIcon/>
            </div>
        </div>
    )
}